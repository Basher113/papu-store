import CustomCarousel from "../../components/custom-carousel/CustomCarousel"
import Hero from "../../components/hero/Hero"
import ProductCard from "../../components/product-card/ProductCard"

import { ProductCategoryCarouselContainer, Wrapper, CategoryTitle, ContentContainer } from "./landingPage.styles"
import { formatProductsByCategoriesMap } from "../../utils/format-products-by-categories-map/formatProductsByCategoriesMap"
import { useOutletContext } from "react-router-dom"

const LandingPage = () => {
  const products = useOutletContext();
  if (products.loading) return <div>Loading...</div>
  const productCategoriesMap = formatProductsByCategoriesMap(products);
  return (
    <Wrapper>
      <Hero />
      <ContentContainer>
        {Object.keys(productCategoriesMap).map((title) => (
          <ProductCategoryCarouselContainer>
            <CategoryTitle>{title}</CategoryTitle>
            <CustomCarousel>
              {productCategoriesMap[title].filter((_, index) => index < 7).map((product) => <ProductCard key={product.id} product={product}/>)}
            </CustomCarousel>
          </ProductCategoryCarouselContainer>
        ))}

        
       
      </ContentContainer>
    </Wrapper>
  )
}

export default LandingPage