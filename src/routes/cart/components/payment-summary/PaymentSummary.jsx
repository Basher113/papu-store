import { Content, ProcessButton, Total, Wrapper } from './paymentSummary.styles'

const PaymentSummary = ({cartItems}) => {
  const subTotal = cartItems.reduce((currentTotal, currentItem) => {
    return currentTotal + currentItem.quantity * currentItem.product.price;
  }, 0)
  return (
    <Wrapper>
      <Content href="">
        <div className='header'>Cart Total</div>
        <Total>
          <div>
            <span>Subtotal:</span>
            <span>${subTotal.toFixed(2)}</span>
          </div>

          <div>
            <span>Shipping:</span>
            <span>Free</span>
          </div>

          <div>
            <span>Total:</span>
            <span>${subTotal.toFixed(2)}</span>
          </div>
        </Total>
        <ProcessButton>Process to Checkout</ProcessButton>
      </Content>
    </Wrapper>
  )
}

export default PaymentSummary