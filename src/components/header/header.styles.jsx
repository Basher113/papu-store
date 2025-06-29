import styled from "styled-components";

export const Wrapper = styled.header`
  padding: 2rem 4rem 1rem 4rem;
  display: flex;
  justify-content: space-between;
  position: sticky;
  border-bottom: 0.5px solid black;
  width: 100vw;
`

export const Logo = styled.h1`
  font-size: 1.2rem;
`

export const MainNav = styled.nav`
  & > ul {
    display: flex;
    padding: 0;
    margin: 0;
    list-style: none;
    gap: 1rem;
  }
`

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const SearchGroup = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  & > input {
    font-size: 0.8rem;
    border: none;
    background-color: rgb(235, 235, 235);
    padding: 0.5rem 3rem 0.5rem 1rem;
    border-radius: 3px;
  }

  & > img {
    position: absolute;
    right: 1px;
    height: 20px;
  }
`