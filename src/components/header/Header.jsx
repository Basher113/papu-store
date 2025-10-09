import { Link, useNavigate } from "react-router-dom";
import { Wrapper, HeaderRight, Logo, MainNav, SearchGroup, SearchInput} from "./header.styles";
import HeartIcon from "../../assets/icons/heart.svg";
import SearchIcon  from "../../assets/icons/search.svg";
import LogoIcon from "../../assets/icons/logo.png";

import { useGetCurrentUserQuery } from "../../reducers/slice/users/user.slice";
import { useLogoutUserMutation } from "../../reducers/slice/users/user.slice";
import { toast } from "react-toastify";

import CartIcon from "../cart-icon/CartIcon";

const Header = () => {
  const navigate = useNavigate();
  const {data: currentUser, error, } = useGetCurrentUserQuery();
  const [logout] = useLogoutUserMutation();

  const handleLogout = async () => {
    try {
      await logout().unwrap();
      toast.success("logout successfully!")
    } catch (error) {
      console.log("Error logout", error)
    }
  }

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
          {currentUser && !error
          ?  <li><Link onClick={handleLogout}>Logout</Link></li>
          :  <li><Link to="/login">Login</Link></li>
          }
        </ul>
      </MainNav>
      <HeaderRight>
        <SearchGroup>
          <SearchInput type="text" placeholder="What are you looking for? " />
          <img src={SearchIcon} alt="search icon" height="24" width="24" />
        </SearchGroup>
        <img src={HeartIcon} alt="heart icon" height="24" width="24"/>
        <CartIcon />
      </HeaderRight>
    </Wrapper>
  )
}

export default Header