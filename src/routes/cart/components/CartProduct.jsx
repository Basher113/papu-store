import { useNavigate } from 'react-router-dom';
import { truncateStr } from '../../../utils/truncate/truncate';
import { Wrapper, ProductRow} from './cartProduct.styles';
import { useUpdateCartItemMutation } from '../../../reducers/slice/carts/cart.slice';

const CartProduct = ({cartItem}) => {
  const navigate = useNavigate();
  const [updateCartItem, ] = useUpdateCartItemMutation();

  const handleUpdateCartItem = async (e) => {
    const quantity = e.target.value;
    try {
      await updateCartItem({cartItemId: cartItem.id, quantity})
    } catch (error) {
      console.log("update cart error:", error);
    }
  } 
  return (
    <Wrapper>
      <ProductRow onClick={() => navigate(`/product-detail/${cartItem.product.id}`)}>
        <img src={cartItem.product.imageUrl} />
        <span className="product-name">{truncateStr(cartItem.product.name, 15)}</span>
      </ProductRow>
      <div className="price">${cartItem.product.price}</div>
      <div className="quantity">
        <input type="number" name="quantity" defaultValue={cartItem.quantity} onChange={handleUpdateCartItem} min="1" max="10" />
      </div>
      <div className="subtotal">${(cartItem.quantity * cartItem.product.price).toFixed(2)}</div>
    </Wrapper >
  )
}

export default CartProduct