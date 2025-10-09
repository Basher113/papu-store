import styled from "styled-components";
import Button from "../../components/button/Button";

export const Wrapper = styled.section`
  padding: 3rem 1rem;
  display: flex;
  flex-direction: column;
  
  gap: 1rem;
  
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

  input[type=number] {
    width: 60px;
    padding: .5rem;
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

export const ReturnButton = styled(Button)`
  width: 250px;
  padding: 0.8em 0;
`

export const CartEmpty = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
  gap: 1rem;
`