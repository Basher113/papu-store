import { useNavigate } from 'react-router-dom';
import { truncateStr } from '../../../utils/truncate/truncate';
import { Wrapper, ProductRow} from './cartProduct.styles';
import { useDeleteCartItemMutation, useUpdateCartItemMutation } from '../../../reducers/slice/carts/cart.slice';
import DeleteIcon from "../../../assets/icons/delete.svg";

const CartProduct = ({cartItem}) => {
  const navigate = useNavigate();
  const [updateCartItem, ] = useUpdateCartItemMutation();
  const [deleteCartItem, ] = useDeleteCartItemMutation();

  const handleUpdateCartItem = async (e) => {
    const quantity = e.target.value;
    try {
      await updateCartItem({cartItemId: cartItem.id, quantity})
    } catch (error) {
      console.log("update cart error:", error);
    }
  } 

  const handleDeleteCartItem = async () => {
    try {
      await deleteCartItem(cartItem.id);
    } catch (error) {
      console.log("delete cart item error:", error);
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
        <input type="number" name="quantity" defaultValue={cartItem.quantity} onChange={handleUpdateCartItem} min="1" max={cartItem.product.stock} />
        {cartItem.product.stock < 10 && <span className='stock'>{cartItem.product.stock} items left</span>}
      </div>
      <div className="subtotal">${(cartItem.quantity * cartItem.product.price).toFixed(2)}</div>
      <img src={DeleteIcon} className="delete-icon" onClick={handleDeleteCartItem}/>
    </Wrapper >
  )
}

export default CartProduct