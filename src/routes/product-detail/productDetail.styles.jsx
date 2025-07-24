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
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    width: 80%;
    margin: 0 auto;
    grid-template-columns: 1fr;
    grid-template-rows: 200px 1fr;

    & > img {
      
    }
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

// Skeleton Loader Section

export const SkeletonProductDetailImage = styled.div`
  width: 100%;
  height: 100%;
  min-height: 600px;
  max-height: 600px;
  background-color: #D2DBE2;
  border-radius: 5px;

  @media (max-width: 1024px) {
    min-height: 400px;
  }
`

export const SkeletonProductDetailTitle = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 5px;
  background-color: #D2DBE2;
  border-radius: 3px;
`

export const SkeletonProductDetailPrice = styled(SkeletonProductDetailTitle)`
  width: 10%;
  margin: 10px 0;
`

export const SkeletonProductDetailDescription = styled(SkeletonProductDetailTitle)`
  height: 10px;
  margin-bottom: 3px;
`

export const SkeletonLoaderProductDetailButton = styled(SkeletonProductDetailTitle)`
  height: 30px;
  margin-top: 5px;
`