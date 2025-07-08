import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 200px 150px;
  gap: 1rem;
  
  background-color: white;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  padding: 1rem;
  border-radius: 5px;
  max-height: 350px;
`

export const ImageContainer = styled.div`
  position: relative;
  
  border-bottom: 1px solid black;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }
`

export const InfoContainer = styled.div`

`

export const ProductName = styled.div`
  font-weight: 500;
  font-size: var(--font-s);

`

export const ProductPriceContainer = styled.div`
  display: flex;
  gap: 1rem;
  font-size: var(--font-xs);
  

  & > .discounted-price {
    color: #DB4444;
    font-weight: 500;
  }

  & > .original-price {
    color:rgba(0, 0, 0, 0.5);
    text-decoration: line-through;
  }
`