import { Wrapper, HeaderRight, Logo, MainNav, SearchGroup } from "./header.styles";
import HeartIcon from "../../assets/icons/heart.svg";
import SearchIcon  from "../../assets/icons/search.svg";
import CartIcon from "../../assets/icons/cart.svg";
import AccountIcon from "../../assets/icons/account.svg";
const Header = () => {
  return (
    <Wrapper>
      <Logo>Papu'Store</Logo>
      <MainNav>
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">Contact</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Sign Up</a></li>
        </ul>
      </MainNav>
      <HeaderRight>
        <SearchGroup>
          <input type="text" placeholder="What are you looking for? " />
          <img src={SearchIcon} alt="search icon" height="24" width="24" />
        </SearchGroup>
        <img src={HeartIcon} alt="heart icon" height="24" width="24"/>
        <img src={CartIcon} alt="cart icon" height="24" width="24"/>
        <img src={AccountIcon} alt="account icon" height="24" width="24"/>
      </HeaderRight>
    </Wrapper>
  )
}

export default Header