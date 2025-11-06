import { Wrapper } from "./cartIcon.styles";
import icon from "../../../../assets/icons/cart.svg";
import { useGetCartQuery } from "../../../../reducers/slice/carts/cart.slice";
import { useNavigate } from "react-router-dom";
const CartIcon = () => {
  const {data, isLoading,} = useGetCartQuery();
  const navigate = useNavigate();
  console.log(data);
  if (isLoading) return;

  return (
    <Wrapper onClick={() => navigate("cart")}>
      <img src={icon} alt="cart icon" height="24" width="24"/>
      <span>{data?.length || "0"}</span>
    </Wrapper>
  );
}

export default CartIcon;