import { CartEmpty, CartHeader, CartProductList,  ReturnButton, Wrapper } from "./cart.styles"
import { useNavigate } from "react-router-dom";
import { BUTTON_TYPE_CLASSES } from "../../components/button/Button";
import { useGetCartQuery } from "../../reducers/slice/carts/cart.slice";
import CartProduct from "./components/CartProduct";

const Cart = () => {
  const navigate = useNavigate();
  const {data, isLoading, error} = useGetCartQuery();
  
  const handleGoToShop = () => {
    navigate("/")
  }
  
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
               <CartProduct key={cartItem.id} cartItem={cartItem}/>
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