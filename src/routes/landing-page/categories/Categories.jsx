import { Wrapper, CategoriesHeader, CategoriesList, CategoryItem } from "./categories.styles"
const Categories = () => {
  return (
    <Wrapper>
      <CategoriesHeader>Categories</CategoriesHeader>
      <CategoriesList>
        <CategoryItem><a href="">TV</a></CategoryItem>
        <CategoryItem><a href="">Audio</a></CategoryItem>
        <CategoryItem><a href="">Laptop</a></CategoryItem>
        <CategoryItem><a href="">Mobile</a></CategoryItem>
        <CategoryItem><a href="">Gaming</a></CategoryItem>
      </CategoriesList>
    </Wrapper>
  )
}

export default Categories