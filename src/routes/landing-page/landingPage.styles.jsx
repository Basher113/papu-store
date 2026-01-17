import styled from "styled-components";
import Button from "../../components/button/Button";

export const Wrapper = styled.section`
  padding-bottom: 5rem;
  display: grid;
  gap: 5rem;
`

export const ProductCarouselContainer = styled.div`
  display: grid;
  gap: 0.5rem;
  padding: 0 1rem;
`

export const CategoryTitle = styled.div`
  padding-left: 1rem;
  font-weight: 700;
  font-size: var(--font-m);
  text-transform: capitalize;
  cursor: pointer;
`

export const PopularProductsPreview = styled.div`
  display: grid;
  gap: 2rem;
`

export const ViewAllButton = styled(Button)`
  padding: 0.5rem 5rem;
  margin: 0 auto;
`

export const SkeletonLoaderCategoryTitle = styled.div`
  width: 20%;
  height: 20px;
  background-color: #D2DBE2;
  border-radius: 7px;
`