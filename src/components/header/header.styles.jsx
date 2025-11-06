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
  min-width: 1440;
  max-width: 1920px;
  margin: 0 auto;
  background-color: white;
  border-bottom: 0.5px solid black;

  @media (max-width: 660px) {
    padding: 2rem 2rem;
  }
`

export const Logo = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  caret-color: transparent;
  gap: 0.5rem;
  & > img {
    min-width: 30px;
  }

  & > div {
    font-weight: 700;
    font-size: var(--font-m);
  }

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

  &  img {
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
  
  & > img {
    position: absolute;
    right: 1px;
    width: 24px;
    height: 24px;
    cursor: pointer
  }

  @media (max-width: 660px) {
    & > img {
      position: static;
      
      &:hover {
        transform: scale(1.1)
      }
    }
  }
`

export const SearchInput = styled.input`
  border: none;
  background-color: rgb(235, 235, 235);
  padding: 0.5rem 3rem 0.5rem 1rem;
  border-radius: 3px;

  @media (max-width: 660px) {
    display: none;
  }
`