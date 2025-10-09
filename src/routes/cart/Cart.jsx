import { CartEmpty, CartHeader, CartProduct, CartProductList, ProductRow, ReturnButton, Wrapper } from "./cart.styles"
import { useNavigate } from "react-router-dom";
import { truncateStr } from "../../utils/truncate/truncate";
import { BUTTON_TYPE_CLASSES } from "../../components/button/Button";
import { useGetCartQuery } from "../../reducers/slice/carts/cart.slice";

const Cart = () => {
  const navigate = useNavigate();
  const {data, isLoading, error} = useGetCartQuery();
  
  const handleGoToShop = () => {
    navigate("/")
  }
  console.log(data);


  return (
   
    <Wrapper>
      {
        error ? (
          <div>{error?.data?.message || "Something went wrong."}</div>
        ) : isLoading ? (
          <div>Loading...</div> // Change to UI LOADING!
        ) : data.length ? (
          <>
            <CartHeader>
              <span>Product</span>
              <span>Price</span>
              <span>Quantity</span>
              <span>Subtotal</span>
            </CartHeader>
            <CartProductList>
              {data.map(cartItem => (
                <CartProduct key={cartItem.id}>
                  <ProductRow onClick={() => navigate(`/product-detail/${cartItem.product.id}`)}>
                    <img src={cartItem.product.imageUrl} />
                    <span>{truncateStr(cartItem.product.name, 15)}</span>
                  </ProductRow>
                  <div className="price">${cartItem.product.price}</div>
                  <div className="quantity">
                    <input type="number" name="quantity" defaultValue={cartItem.quantity} min="1" max="10" />
                  </div>
                  <div className="subtotal">${cartItem.quantity * cartItem.product.price}</div>
                </CartProduct >
              ))}
            </CartProductList>
            <ReturnButton buttonType={BUTTON_TYPE_CLASSES.helper} onClick={handleGoToShop}>Return To Shop</ReturnButton>
          </>
        ) : (
          <CartEmpty>
            <h2>Your Shopping Cart is empty</h2>
            <ReturnButton onClick={handleGoToShop}>Go Shopping Now</ReturnButton>
          </CartEmpty>
        )
      }
      
      
    </Wrapper>
  )
}

export default Cart