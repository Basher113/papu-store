import styled from "styled-components";

export const Wrapper = styled.div`
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;

  padding: 2rem;
  
  & > div {
    flex: 1;
    text-align: center;
  }

  input[type=number] {
    width: 40px;
    padding: .4rem;
    text-align: center;
  }

  font-size: var(--font-xs);
`

export const ProductRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  justify-content: center;
  cursor: pointer;
  
  & > .product-name {
    &:hover { 
      text-decoration: underline;
    }
  }

  & > img {
    width: 50px;
    height: auto;
  }

`
