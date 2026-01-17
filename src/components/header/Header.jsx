import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  Wrapper, 
  HeaderRight, 
  Logo, 
  MainNav, 
  SearchGroup, 
  SearchInput,
  MobileMenuButton,
  MobileMenu,
  MobileMenuOverlay,
  MobileSearchWrapper,
  SearchIconButton
} from "./header.styles";
import HeartIcon from "../../assets/icons/heart.svg";
import SearchIcon from "../../assets/icons/search.svg";
import LogoIcon from "../../assets/icons/logo.png";

import { useGetCurrentUserQuery } from "../../reducers/slice/users/user.slice";

import CartIcon from "./subComponents/cart-icon/CartIcon";
import UserProfile from "./subComponents/user-profile/UserProfile";

const Header = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { data: currentUser, error } = useGetCurrentUserQuery();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <Wrapper>
        <Logo onClick={() => navigate("/")}>
          <img src={LogoIcon} alt="logo" width="30" />
          <div>Papu'Store</div>
        </Logo>

        {/* Desktop Navigation */}
        <MainNav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><a href="/#categories-section">Categories</a></li>
            {!currentUser && !error && <li><Link to="/login">Login</Link></li>}
          </ul>
        </MainNav>

        <HeaderRight>
          {/* Desktop Search */}
          <SearchGroup className="desktop-search">
            <SearchInput type="text" placeholder="What are you looking for?" />
            <img src={SearchIcon} alt="search icon" height="24" width="24" />
          </SearchGroup>

          {/* Mobile Search Button */}
          <SearchIconButton 
            className="mobile-search-btn" 
            onClick={toggleSearch}
          >
            <img src={SearchIcon} alt="search icon" height="24" width="24" />
          </SearchIconButton>

          <img src={HeartIcon} alt="heart icon" height="24" width="24" />
          {currentUser && <CartIcon />}
          {currentUser && <UserProfile />}

          {/* Mobile Menu Button */}
          <MobileMenuButton 
            onClick={toggleMobileMenu}
            isOpen={isMobileMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </MobileMenuButton>
        </HeaderRight>
      </Wrapper>

      {/* Mobile Search Bar */}
      {isSearchOpen && (
        <MobileSearchWrapper>
          <SearchInput 
            type="text" 
            placeholder="What are you looking for?" 
            autoFocus
          />
          <button onClick={toggleSearch}>✕</button>
        </MobileSearchWrapper>
      )}

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <MobileMenuOverlay onClick={closeMobileMenu} />
      )}

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen}>
        <nav>
          <ul>
            <li>
              <Link to="/" onClick={closeMobileMenu}>Home</Link>
            </li>
            <li>
              <Link to="/contact" onClick={closeMobileMenu}>Contact</Link>
            </li>
            <li>
              <Link to="/about" onClick={closeMobileMenu}>About</Link>
            </li>
            <li>
              <a href="#categories-section" onClick={closeMobileMenu}>Categories</a>
            </li>
            {!currentUser && !error && (
              <li>
                <Link to="/login" onClick={closeMobileMenu}>Login</Link>
              </li>
            )}
          </ul>
        </nav>
      </MobileMenu>
    </>
  );
};

export default Header;