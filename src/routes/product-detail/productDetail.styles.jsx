import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 1rem;
`

export const ProductDetailContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  
  & > img {
    object-fit: contain;
    width: 100%;
    height: 100%;
    max-height: 600px;
    background-color: white;
  }
`

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  & > .product-detail-title {
    font-weight: 700;
    font-size: var(--font-m);
  }

  & > .product-detail-price {
    font-size: calc(var(--font-m) - 0.25rem);
  }

  & > .product-detail-description {
    font-size: var(--font-xs);
    border-bottom: 0.5px solid black;
    padding-bottom: 1em;
  }

  & > .buttons-container {
    display: flex;
    gap: 1rem;
    & > * {

      flex: 1;
    }
  }
`