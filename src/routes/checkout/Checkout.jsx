import PaymentInfo from "../../components/payment-info/PaymentInfo";
import Button from "../../components/button/Button"
import { Wrapper,  BillingDetailsForm, FormTitle, InputGroup, OrderInformation, ProductInfo, PaymentOption, BillingDetailsInputs } from "./checkout.styles"
import { ProductRow } from "../cart/components/cart-product/cartProduct.styles";
import { useLocation, useNavigate } from "react-router-dom"
import { truncateStr } from "../../utils/truncate/truncate";
import { useState } from "react";

import GcashIcon from "../../assets/icons/gcash.webp"
import { useCreateOrderCashOnDeliveryMutation, useCreateOrderPayOnPaymongoMutation } from "../../reducers/slice/order/order.slice";
import { toast } from "react-toastify";

const defaultFormFields = {
  fullName: "",
  phoneNumber: "",
  street: "",
  barangay: "",
  city: "",
  postalCode: "",
};

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {state} = location;
  const [paymentMethod, setPaymentMethod] = useState("cashOnDelivery");
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [cashOnDelivery, {isLoading: cashOnDeliveryLoading, error: cashOnDeliveryError}] = useCreateOrderCashOnDeliveryMutation();  // eslint-disable-line
  const [paymongoGateway, {isLoading: paymongoLoading, error: paymongoError}] = useCreateOrderPayOnPaymongoMutation();  // eslint-disable-line
  const {products = [], subTotal} = state;
  const handlePaymentMethod = (e) => {
    setPaymentMethod(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (paymentMethod == "cashOnDelivery") {
      try {
        //
        await cashOnDelivery({products, total: subTotal > 1000 ? subTotal : subTotal + 50, paymentMethod, addressData: formFields}).unwrap()
        navigate("/");
        toast.success("Succesful Order.");
      } catch (err) {
        console.log("cash on delivery error:", err);
      }
    } else {
      try {
        const response = await paymongoGateway({products, total: subTotal, paymentMethod, addressData: formFields}).unwrap()
        
        sessionStorage.setItem("sessionId", response.sessionId);
        window.location.href = response.checkoutUrl;
        
      } catch (err) {
        console.log("cash on delivery error:", err);
      }
    } 
  }

  const handleChange = (e) => {
    
    const {value, name} = e.target;
    console.log([name], value);
    setFormFields({...formFields, [name]: value});
  };


  return (
    <Wrapper>
      <FormTitle>Billing Details</FormTitle>
      <BillingDetailsForm method="POST" onSubmit={handleSubmit}>
        <BillingDetailsInputs >
        
        <InputGroup>
          <label htmlFor="first-name">Full Name*</label>
          <input type="text" id="first-name" name="fullName" onChange={handleChange} required/>
        </InputGroup>
         <InputGroup>
          <label htmlFor="phone-number">Phone Number*</label>
          <input type="text" id="phone-number" name="phoneNumber" onChange={handleChange} required/>
        </InputGroup>
        <InputGroup>
          <label htmlFor="street-address">Street Name, Building, House Number*</label>
          <input type="text" id="street-address" name="street" onChange={handleChange} required/>
        </InputGroup>

        <InputGroup>
          <label htmlFor="barangay-address">Barangay | Village*</label>
          <input type="text" id="barangay-address" name="barangay" onChange={handleChange} required/>
        </InputGroup>

        <InputGroup>
          <label htmlFor="city-address">City*</label>
          <input type="text" id="city-address" name="city" onChange={handleChange} required/>
        </InputGroup>

        <InputGroup>
          <label htmlFor="barangay-address">Postal Code*</label>
          <input type="text" id="barangay-address" name="postalCode" onChange={handleChange} required/>
        </InputGroup>

        <InputGroup className="checkbox">
          <input type="checkbox" id="save-info-checkbox"/>
          <label htmlFor="save-info-checkbox">Set as default address. <span>**This will set as default for your first order.</span></label>
        </InputGroup>

      </BillingDetailsInputs>
      <OrderInformation>
        {
        products.length > 0 && products.map(product => (
          
          <ProductInfo> 

            <ProductRow onClick={() => navigate(`/product-detail/${product.id}`)}>
              {/*  Might create component for this because it is only share styled components */}
              <img src={product.imageUrl} />
              <span className="product-name">{truncateStr(product.name, 15)}</span>
            </ProductRow>
            <span>${product.price} x {product.quantity}</span>
          </ProductInfo>
        ))
        }
        <PaymentInfo subTotal={subTotal}/>
        <PaymentOption>
              <label htmlFor="gcash-radio">
                <input type="radio" id="gcash-radio" name="payment-method" value="gcash"  onChange={handlePaymentMethod} checked={paymentMethod === "gcash"} />
                Gcash
              </label>

              <img src={GcashIcon} alt="" />

              <label htmlFor="cash-on-delivery-radio">
                <input type="radio" name="payment-method" id="cash-on-delivery-radio"  value="cashOnDelivery" onChange={handlePaymentMethod} checked={paymentMethod === "cashOnDelivery"} />
                Cash on delivery
              </label>
        </PaymentOption>
        <Button>{cashOnDeliveryLoading || paymongoLoading ? "Loading..." : "Place Order"}</Button>
      </OrderInformation>
      </BillingDetailsForm>
      


      
    </Wrapper>
  )
}

export default Checkout