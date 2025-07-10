import { Wrapper, HeaderRight, Logo, MainNav, SearchGroup, SearchInput } from "./header.styles";
import HeartIcon from "../../assets/icons/heart.svg";
import SearchIcon  from "../../assets/icons/search.svg";
import CartIcon from "../../assets/icons/cart.svg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Wrapper>
      <Logo>Papu'Store</Logo>
      <MainNav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><a href="">Contact</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Categories</a></li>
        </ul>
      </MainNav>
      <HeaderRight>
        <SearchGroup>
          <SearchInput type="text" placeholder="What are you looking for? " />
          <img src={SearchIcon} alt="search icon" height="24" width="24" />
        </SearchGroup>
        <img src={HeartIcon} alt="heart icon" height="24" width="24"/>
        <img src={CartIcon} alt="cart icon" height="24" width="24"/>
      </HeaderRight>
    </Wrapper>
  )
}

export default Header