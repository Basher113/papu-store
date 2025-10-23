import PaymentInfo from "../../components/payment-info/PaymentInfo";
import Button from "../../components/button/Button"
import { Wrapper, Content, BillingDetailsForm, FormTitle, InputGroup, OrderInformation, ProductInfo, PaymentOption } from "./checkout.styles"
import { ProductRow } from "../cart/components/cart-product/cartProduct.styles";
import { useLocation, useNavigate } from "react-router-dom"
import { truncateStr } from "../../utils/truncate/truncate";
import { useState } from "react";

import GcashIcon from "../../assets/icons/gcash.webp"

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {state} = location;
  const [paymentMethod, setPaymentMethod] = useState("cashOnDelivery");
  
  const handlePaymentMethod = (e) => {
    setPaymentMethod(e.target.value);
  }

  const {products = [], subTotal} = state;
  console.log(subTotal);
  return (
    <Wrapper>
      <FormTitle>Billing Details</FormTitle>
      <Content>
        <BillingDetailsForm>
        
        <InputGroup>
          <label htmlFor="first-name">First Name*</label>
          <input type="text" id="first-name" required/>
        </InputGroup>

        <InputGroup>
          <label htmlFor="street-address">Street Address*</label>
          <input type="text" id="street-address" required/>
        </InputGroup>

        <InputGroup>
          <label htmlFor="city-address">City | Town*</label>
          <input type="text" id="city-address" required/>
        </InputGroup>

        <InputGroup>
          <label htmlFor="phone-number">Phone Number*</label>
          <input type="text" id="phone-number" required/>
        </InputGroup>
        <InputGroup>
          <label htmlFor="email-address">Email Address*</label>
          <input type="email" id="email-address" required/>
        </InputGroup>
      
        <InputGroup>
          <label htmlFor="company-name">Company Name</label>
          <input type="text" id="company-name" />
        </InputGroup>

        <InputGroup className="checkbox">
          <input type="checkbox" id="save-info-checkbox"/>
          <label htmlFor="save-info-checkbox">Save this information for faster checkout next time</label>
        </InputGroup>
      </BillingDetailsForm>
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
                <input type="radio" id="gcash-radio" name="payment-method" value="gCash"  onChange={handlePaymentMethod} checked={paymentMethod === "gCash"} />
                Gcash
              </label>

              <img src={GcashIcon} alt="" />

              <label htmlFor="cash-on-delivery-radio">
                <input type="radio" name="payment-method" id="cash-on-delivery-radio"  value="cashOnDelivery" onChange={handlePaymentMethod} checked={paymentMethod === "cashOnDelivery"} />
                Cash on delivery
              </label>
        </PaymentOption>
        <Button>Place Order</Button>
      </OrderInformation>
      </Content>
      


      
    </Wrapper>
  )
}

export default Checkout