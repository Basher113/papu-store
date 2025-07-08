import styled from "styled-components";

export const Wrapper = styled.header`
  padding: 2rem 4rem 1rem 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100vw;
  max-width: 1920px;
  margin: 0 auto;
  background-color: white;
`

export const Logo = styled.h1`
  font-size: var(--font-m);
`

export const MainNav = styled.nav`
  & > ul {
    display: flex;
    padding: 0;
    margin: 0;
    list-style: none;
    gap: 1rem;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  & > img {
    cursor: pointer;

    &:hover {
      transform: scale(1.1)
    }
  }
`

export const SearchGroup = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  & > input {
    border: none;
    background-color: rgb(235, 235, 235);
    padding: 0.5rem 3rem 0.5rem 1rem;
    border-radius: 3px;
  }

  & > img {
    position: absolute;
    right: 1px;
    height: 20px;
    cursor: pointer;
  }
`