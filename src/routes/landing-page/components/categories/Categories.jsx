
import {  CategoryItem, Title, Wrapper } from "./categories.styles"
import { useNavigate } from "react-router-dom"
import { useGetCategoriesQuery } from "../../../../reducers/slice/products/product.slice"
import CustomCarousel from "../../../../components/custom-carousel/CustomCarousel";
import { categoriesCarouselResponsive } from "../../../../utils/carousel/carousel";
import Spinner from "../../../../components/spinner/Spinner";

 

const Categories = () => {
  const navigate = useNavigate();
  const {data: categories, isLoading, error, isError} = useGetCategoriesQuery()
  if (error || isError) return;

  if (isLoading) return <Spinner />
  return (
    <Wrapper id="categories-section">
      <Title>Browse By Category</Title>
      <CustomCarousel responsive={categoriesCarouselResponsive}>
        {categories && categories.map(category => (
          <CategoryItem key={category.id} onClick={() => navigate(`products/${category.name}`)}>
            <img src={category.iconUrl} alt={category.name + " icon"} height="30" width="30" loading="lazy"/>
            <div>{category.name}</div>
          </CategoryItem>
        ))}
        
      </CustomCarousel>
    </Wrapper>
  )
}

export default Categories