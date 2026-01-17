import styled from "styled-components";

export const Wrapper = styled.header`
  padding: 2rem 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10000;
  width: 100vw;
  margin: 0 auto;
  background-color: white;
  border-bottom: 0.5px solid black;

  @media (max-width: 1024px) {
    min-width: 100%;
    padding: 1.5rem 2rem;
  }

  @media (max-width: 660px) {
    padding: 1rem 1rem;
  }
`;

export const Logo = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  caret-color: transparent;
  gap: 0.5rem;
  z-index: 10001;

  & > img {
    min-width: 30px;
  }

  & > div {
    font-weight: 700;
    font-size: var(--font-m);
  }

  @media (max-width: 480px) {
    & > div {
      font-size: 1rem;
    }
  }
`;

export const MainNav = styled.nav`
  & > ul {
    display: flex;
    padding: 0;
    margin: 0;
    list-style: none;
    gap: 2rem;

    & > li > a {
      text-decoration: none;
      color: #000;
      font-weight: 500;
      transition: color 0.2s;
      position: relative;

      &:hover {
        color: #DB4444;
      }

      &::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 0;
        height: 2px;
        background: #DB4444;
        transition: width 0.3s;
      }

      &:hover::after {
        width: 100%;
      }
    }
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  & img {
    cursor: pointer;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.1);
    }
  }

  @media (max-width: 768px) {
    gap: 0.75rem;
  }
`;

export const SearchGroup = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  & > img {
    position: absolute;
    right: 12px;
    width: 24px;
    height: 24px;
    cursor: pointer;
  }

  @media (max-width: 1024px) {
    &.desktop-search {
      display: none;
    }
  }
`;

export const SearchInput = styled.input`
  border: none;
  background-color: rgb(235, 235, 235);
  padding: 0.75rem 3rem 0.75rem 1rem;
  border-radius: 6px;
  font-size: 0.9rem;
  width: 300px;
  transition: all 0.3s;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(219, 68, 68, 0.1);
  }

  &::placeholder {
    color: #999;
  }

  @media (max-width: 1200px) {
    width: 250px;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const SearchIconButton = styled.button`
  display: none;
  background: none;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }

  & > img {
    width: 24px;
    height: 24px;
  }

  @media (max-width: 1024px) {
    &.mobile-search-btn {
      display: block;
    }
  }

  @media (max-width: 480px) {
    padding: 0.25rem;
  }
`;

export const MobileSearchWrapper = styled.div`
  display: none;

  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem;
    background: white;
    border-bottom: 1px solid #ddd;
    position: sticky;
    top: 73px;
    z-index: 9999;
    animation: slideDown 0.3s ease-out;

    @keyframes slideDown {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    & > button {
      background: none;
      border: none;
      font-size: 1.5rem;
      color: #666;
      cursor: pointer;
      padding: 0.5rem;
      line-height: 1;

      &:hover {
        color: #000;
      }
    }
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 28px;
  height: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10001;

  & > span {
    width: 28px;
    height: 3px;
    background: #000;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    &:first-child {
      transform: ${props => props.isOpen ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      opacity: ${props => props.isOpen ? '0' : '1'};
      transform: ${props => props.isOpen ? 'translateX(20px)' : 'translateX(0)'};
    }

    &:nth-child(3) {
      transform: ${props => props.isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }

  @media (max-width: 1024px) {
    display: flex;
  }
`;

export const MobileMenuOverlay = styled.div`
  display: none;

  @media (max-width: 1024px) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    z-index: 9998;
    animation: fadeIn 0.3s ease-out;

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
`;

export const MobileMenu = styled.div`
  display: none;

  @media (max-width: 1024px) {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    width: 280px;
    height: 100vh;
    background: white;
    z-index: 9999;
    padding: 5rem 2rem 2rem;
    box-shadow: -2px 0 8px rgba(0, 0, 0, 0.1);
    transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease-out;

    & > nav > ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 0;

      & > li {
        border-bottom: 1px solid #f0f0f0;

        & > a {
          display: block;
          padding: 1rem 0;
          text-decoration: none;
          color: #000;
          font-weight: 500;
          font-size: 1rem;
          transition: all 0.2s;

          &:hover {
            color: #DB4444;
            padding-left: 0.5rem;
          }

          &:active {
            background: #f9f9f9;
          }
        }
      }
    }
  }

  @media (max-width: 480px) {
    width: 75%;
  }
`;