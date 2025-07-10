import styled from "styled-components";
import Button from "../button/Button";

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 200px 150px;
  gap: 1rem;
  
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  padding: 1rem;
  border-radius: 5px;
  min-height: 300px;
  cursor: pointer;
  transition: transform 0.4s linear;

  &:hover {
    transform: scale(1.05)
  }
  
`

export const ImageContainer = styled.div`
  position: relative;
  padding-bottom: 1rem;
  border-bottom: 1px solid black;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  
`

export const ProductName = styled.div`
  font-weight: 500;
  font-size: var(--font-s);
  flex: 1;
`

export const ProductPriceContainer = styled.div`
  display: flex;
  gap: 1rem;
  font-size: var(--font-xs);
  flex: 1;

  & > .discounted-price {
    color: #DB4444;
    font-weight: 500;
  }

  & > .original-price {
    color:rgba(0, 0, 0, 0.5);
    text-decoration: line-through;
  }
`

export const AddToCartButton = styled(Button)`
  width: 100%;
  bottom: 0;
  padding: 0;
  flex: 0.8;
`