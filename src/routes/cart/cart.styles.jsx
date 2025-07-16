import styled from "styled-components";

export const Wrapper = styled.section`
  padding: 3rem 1rem;
  display: grid;
  gap: 1rem;
  input[type=number] {
    width: 60px;
    padding: .5rem;
    text-align: center;
  }
`

export const CartHeader = styled.div`
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  
  & > span {
    flex: 1;
    text-align: center;
  }
`

export const CartProductList = styled.div`
  display: grid;
  gap: 1rem;
`

export const CartProduct = styled(CartHeader)`
  padding: 2rem;
  & > div {
    flex: 1;
    text-align: center;
  }


`

export const ProductRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  justify-content: center;
  cursor: pointer;

  &:hover {
    
    & > span {
      text-decoration: underline;
    }
  }


  & > img {
    
    width: 50px;
    height: auto;
  }
`