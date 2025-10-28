import { Wrapper } from "./paymentInfo.styles"

const PaymentInfo = ({subTotal}) => {
  const shippingFee = 0; // Change this later ofcourse
  const total = subTotal + shippingFee;
  console.log(subTotal)
  return (
    <Wrapper>
          <div>
            <span>Subtotal:</span>
            <span>${subTotal.toFixed(2)}</span>
          </div>

          <div>
            <span>Shipping:</span>
            <span>{shippingFee ? `$${shippingFee}` : "Free"}</span>
          </div>

          <div>
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </Wrapper>
  )
}

export default PaymentInfo