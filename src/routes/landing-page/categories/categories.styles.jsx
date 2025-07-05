import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  padding: 1rem 0;
  display: grid;
`

export const CategoriesHeader = styled.div`
  font-weight: 700;
  font-size: 1.5rem;
`

export const CategoriesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 1rem;
  gap: 2rem;
  justify-content: space-between;
`

export const CategoryItem = styled.a`
  font-size: 1.1rem;
  padding: 1em 2em;
  border-radius: 40px;
  background-color:rgb(223, 223, 223);
  cursor: pointer;

  @media (max-width: 1024px) {
    font-size: 1rem;
  }
`