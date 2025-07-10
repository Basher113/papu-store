import styled from "styled-components";
import Button from "../../components/button/Button";

export const Wrapper = styled.section`
  padding-bottom: 5rem;
  display: grid;
  gap: 2rem;
`

export const ProductCarouselContainer = styled.div`
  display: grid;
  gap: 1.5rem;
`

export const CategoryTitle = styled.div`
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