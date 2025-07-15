import styled from "styled-components";

export const Wrapper = styled.section`
  display: grid;
  gap: 2rem;
  padding: 0 1rem;
`

export const Title = styled.div`
  font-weight: 700;
  font-size: var(--font-m);
  text-transform: capitalize;
  cursor: pointer;
`

export const CategoriesList = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`

export const CategoryItem = styled.div`
  
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #777777ff;
  padding: 2rem;
  cursor: pointer;
  flex: 1;

  transition: transform 0.6s ease;
  &:hover {
    transform: scale(1.05);
  }

  & > div {
    text-transform: capitalize;
  }
`