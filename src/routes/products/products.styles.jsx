import styled from "styled-components";
import Button from "../../components/button/Button";

export const Wrapper = styled.div`
  display: grid; 
  gap: 1rem;

  & > h2 {
    font-size: var(--font-l);
    text-transform: capitalize;
    cursor: pointer;
  }
`

export const ProductsContainer = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`

export const ViewMoreButton = styled(Button)`
  width: 300px;
  margin: 0 auto;
`