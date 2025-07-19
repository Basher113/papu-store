import styled from "styled-components";
import Button from "../../components/button/Button";

export const Wrapper = styled.div`
  display: grid;
  padding: 1rem;
  gap: 1rem;
  & > h2 {
    text-transform: capitalize;
  }
`

export const ProductsContainer = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`

export const ViewMoreButton = styled(Button)`
  margin: 0 auto;
  margin-top: 3rem;
  padding: 0.5rem 5rem;
`

export const SkeletonLoaderCategoryTitle = styled.div`
  width: 20%;
  height: 20px;
  margin-bottom: 10px;
  background-color: #D2DBE2;
`