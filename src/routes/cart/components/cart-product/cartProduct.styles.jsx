import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 2rem;
  font-size: var(--font-xs);
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;


  & > div {
    flex: 1;
    text-align: center;
  }

  & > .delete-icon {
    cursor: pointer;
    transition: transform 0.8s;

    &:hover {
      transform: rotate(0.3turn);
    }
  }

 

  & > .quantity {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & > input[type=number] {
      width: 40px;
      padding: .4rem;
      text-align: center;
    }

    & > .stock {
      color: red;
    }
  }



`

export const ProductRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  justify-content: center;
  cursor: pointer;
  font-size: var(--font-xs);
  
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
