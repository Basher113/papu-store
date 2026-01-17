import { useNavigate } from 'react-router-dom';
import { Content, ProcessButton, Total, Wrapper } from './paymentSummary.styles'
import PaymentInfo from '../../../../components/payment-info/PaymentInfo';

const PaymentSummary = ({cartItems}) => {
  const navigate = useNavigate();

  const subTotal = cartItems.reduce((currentTotal, currentItem) => {
    return currentTotal + currentItem.quantity * currentItem.product.price;
  }, 0);
  const products = cartItems.map(cartItem => ({...cartItem.product, quantity: cartItem.quantity}));

  const handleProcessCheckout = () => navigate("/checkout", {state: {products: products, subTotal: subTotal, isCheckoutFromCart:true}});

  return (
    <Wrapper>
      <Content href="">
        <div className='header'>Cart Total</div>

        <PaymentInfo subTotal={subTotal}/>
        <ProcessButton onClick={handleProcessCheckout}>Process to Checkout</ProcessButton>
        
      </Content>
    </Wrapper>
  )
}

export default PaymentSummary