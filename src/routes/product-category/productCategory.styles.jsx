import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  padding: 1rem;

  & > h2 {
    text-transform: capitalize;
  }
`

export const ProductsContainer = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`