import { CartHeader, CartProduct, ProductRow, Wrapper } from "./checkout.styles"
import { useOutletContext } from "react-router-dom";
import { truncateStr } from "../../utils/truncate/truncate";

const Checkout = () => {
  const {cart} = useOutletContext()
  
  return (
    <Wrapper>
      <CartHeader>
        <span>Product</span>
        <span>Price</span>
        <span>Quantity</span>
        <span>Subtotal</span>
      </CartHeader>
      {cart.map(cartItem => (
        <CartProduct key={cartItem.id}>
          <ProductRow>
            <img src="monitor.png" />
            <span>{truncateStr(cartItem.product.title, 15)}</span>
          </ProductRow>
          <div className="price">${cartItem.product.price}</div>
          <div className="quantity">
            <input type="number" defaultValue={cartItem.quantity} />
          </div>
          <div className="subtotal">${cartItem.quantity * cartItem.product.price}</div>
        </CartProduct>
      ))}
      
    </Wrapper>
  )
}

export default Checkout