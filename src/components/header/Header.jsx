import { Link, useNavigate } from "react-router-dom";
import { Wrapper, HeaderRight, Logo, MainNav, SearchGroup, SearchInput, CartIconContainer } from "./header.styles";
import HeartIcon from "../../assets/icons/heart.svg";
import SearchIcon  from "../../assets/icons/search.svg";
import CartIcon from "../../assets/icons/cart.svg";
import LogoIcon from "../../assets/icons/logo.png"


const Header = ({cartCount}) => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Logo onClick={() => navigate("/")}>
        <img src={LogoIcon} alt="logo" width="30" />
        <div>Papu'Store</div>
      </Logo>
      <MainNav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link>Contact</Link></li>
          <li><Link>About</Link></li>
          <li><Link>Categories</Link></li>
        </ul>
      </MainNav>
      <HeaderRight>
        <SearchGroup>
          <SearchInput type="text" placeholder="What are you looking for? " />
          <img src={SearchIcon} alt="search icon" height="24" width="24" />
        </SearchGroup>
        <img src={HeartIcon} alt="heart icon" height="24" width="24"/>
        <CartIconContainer onClick={() => navigate("cart")}>
          <img src={CartIcon} alt="cart icon" height="24" width="24"/>
          <span>{cartCount}</span>
        </CartIconContainer>
      </HeaderRight>
    </Wrapper>
  )
}

export default Header