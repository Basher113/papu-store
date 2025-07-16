import { CartHeader, CartProduct, CartProductList, ProductRow, Wrapper } from "./cart.styles"
import { useOutletContext } from "react-router-dom";
import { truncateStr } from "../../utils/truncate/truncate";
import { updateCartProductQuantity } from "../../utils/cart/cart";

const Cart = () => {
  const {cart, setCart} = useOutletContext()
  
  const quantityInputHandler = (e, cartId) => {
    const newQuantity = Number.parseInt(e.target.value);
    
    
    setCart(updateCartProductQuantity(cart, cartId, newQuantity));
  }
  return (
    <Wrapper>
      <CartHeader>
        <span>Product</span>
        <span>Price</span>
        <span>Quantity</span>
        <span>Subtotal</span>
      </CartHeader>
      <CartProductList>
        {cart.map(cartItem => (
          <CartProduct key={cartItem.id}>
            <ProductRow>
              <img src={cartItem.product.image} />
              <span>{truncateStr(cartItem.product.title, 15)}</span>
            </ProductRow>
            <div className="price">${cartItem.product.price}</div>
            <div className="quantity">
              <input type="number" name="quantity" defaultValue={cartItem.quantity} min="1" max="10" onChange={(e) => quantityInputHandler(e, cartItem.id)}/>
            </div>
            <div className="subtotal">${cartItem.quantity * cartItem.product.price}</div>
          </CartProduct>
        ))}
      </CartProductList>
      
    </Wrapper>
  )
}

export default Cart