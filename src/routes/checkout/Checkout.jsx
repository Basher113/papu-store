import PaymentInfo from "../../components/payment-info/PaymentInfo";
import Button from "../../components/button/Button"
import { Wrapper,  BillingDetailsForm, FormTitle, InputGroup, OrderInformation, ProductInfo, PaymentOption, BillingDetailsInputs } from "./checkout.styles"
import { ProductRow } from "../cart/components/cart-product/cartProduct.styles";
import { useLocation, useNavigate } from "react-router-dom"
import { truncateStr } from "../../utils/truncate/truncate";
import { useState, useEffect } from "react";

import GcashIcon from "../../assets/icons/gcash.webp"
import { useCreateOrderCashOnDeliveryMutation, useCreateOrderPayOnPaymongoMutation } from "../../reducers/slice/order/order.slice";
import { useGetUserAddressesQuery, useGetDefaultAddressQuery, useAddAddressMutation, useUpdateAddressMutation } from "../../reducers/slice/address/address.slice";
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
  const [isEditing, setIsEditing] = useState(false);
  const [cashOnDelivery, {isLoading: cashOnDeliveryLoading, error: cashOnDeliveryError}] = useCreateOrderCashOnDeliveryMutation();  // eslint-disable-line
  const [paymongoGateway, {isLoading: paymongoLoading, error: paymongoError}] = useCreateOrderPayOnPaymongoMutation();  // eslint-disable-line
  const {products = [], subTotal, isCheckoutFromCart} = state;
  const handlePaymentMethod = (e) => {
    setPaymentMethod(e.target.value);
  }

  console.log(isCheckoutFromCart);

  const {data: addressResponse, isLoading: addressResponseLoading} = useGetUserAddressesQuery();
  const { data: defaultAddressResponse, isLoading: defaultAddressResponseLoading} = useGetDefaultAddressQuery();
  const [addAddress] = useAddAddressMutation();
  const [updateAddress] = useUpdateAddressMutation();
  console.log(defaultAddressResponse);


  const addresses = addressResponse || [];

  const defaultAddress = defaultAddressResponse || null;

  useEffect(() => {
    if (defaultAddress) {
      setFormFields({
        fullName: defaultAddress.fullName || "",
        phoneNumber: defaultAddress.phoneNumber || "",
        street: defaultAddress.street || "",
        barangay: defaultAddress.barangay || "",
        city: defaultAddress.city || "",
        postalCode: defaultAddress.postalCode || "",
      });
    }
  }, [defaultAddress]);

  console.log(defaultAddress, "default address");

  if (defaultAddressResponseLoading) return;
  if (addressResponseLoading) return;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // CREATE
      if (addresses.length === 0) {
        await addAddress(formFields).unwrap();
      }

      // UPDATE
      if (addresses.length > 0 && isEditing && defaultAddress) {
        await updateAddress({ id: defaultAddress.id, ...formFields }).unwrap();
        setIsEditing(false);
      }

      // ORDER
      if (paymentMethod === "cashOnDelivery") {
        const response = await cashOnDelivery({
          products,
          addressData: formFields,
          total: subTotal > 1000 ? subTotal : subTotal + 50,
          paymentMethod,
          isCheckoutFromCart
        }).unwrap();

        sessionStorage.setItem("sessionId", response.orderId);
        window.location.href = response.checkoutUrl;
      } else {
        const response = await paymongoGateway({
          products,
          addressData: formFields,
          total: subTotal,
          paymentMethod,
          isCheckoutFromCart
        }).unwrap();

        sessionStorage.setItem("sessionId", response.sessionId);
        window.location.href = response.checkoutUrl;
      }
    } catch (err) {
      console.error(err);
      toast.error(err?.data?.message || "Checkout failed");
    }
  };

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
          <label htmlFor="full-name">Full Name*</label>
          <input type="text" id="full-name" name="fullName" value={formFields.fullName} onChange={handleChange} disabled={addresses.length > 0 && !isEditing} required/>
        </InputGroup>
         <InputGroup>
          <label htmlFor="phone-number">Phone Number*</label>
          <input type="text" id="phone-number" name="phoneNumber" value={formFields.phoneNumber} onChange={handleChange} disabled={addresses.length > 0 && !isEditing} required/>
        </InputGroup>
        <InputGroup>
          <label htmlFor="street-address">Street Name, Building, House Number*</label>
          <input type="text" id="street-address" name="street" value={formFields.street} onChange={handleChange} disabled={addresses.length > 0 && !isEditing} required/>
        </InputGroup>

        <InputGroup>
          <label htmlFor="barangay-address">Barangay | Village*</label>
          <input type="text" id="barangay-address" name="barangay" value={formFields.barangay} onChange={handleChange} disabled={addresses.length > 0 && !isEditing} required/>
        </InputGroup>

        <InputGroup>
          <label htmlFor="city-address">City*</label>
          <input type="text" id="city-address" name="city" value={formFields.city} onChange={handleChange} disabled={addresses.length > 0 && !isEditing} required/>
        </InputGroup>

        <InputGroup>
          <label htmlFor="postal-code">Postal Code*</label>
          <input type="text" id="postal-code" name="postalCode" value={formFields.postalCode} onChange={handleChange} disabled={addresses.length > 0 && !isEditing} required/>
        </InputGroup>

        {addresses.length === 0 && (
          <span>**This will set as your default address.</span>
        )
        }

        {addresses.length > 0 && !isEditing && (
          <Button type="button" onClick={() => setIsEditing(true)}>
            Update Address
          </Button>
        )}

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