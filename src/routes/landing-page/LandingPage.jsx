import CustomCarousel from "../../components/custom-carousel/CustomCarousel"
import Hero from "../../components/hero/Hero"
import ProductCard, { SkeletonProductCard } from "../../components/product-card/ProductCard"

import { ProductCarouselContainer, Wrapper, CategoryTitle, ViewAllButton, SkeletonLoaderCategoryTitle } from "./landingPage.styles"
import { useNavigate } from "react-router-dom"
import Categories from "./components/categories/Categories"
import { useGetProductsInCategoryInfiniteQuery } from "../../reducers/slice/products/product.slice"
import { productCarouselResponsive } from "../../utils/carousel/carousel"

const LandingPage = () => {
  const navigate = useNavigate();
  let {data, isLoading, error, isError} = useGetProductsInCategoryInfiniteQuery("computer") // Will change later!.

  const products = data?.pages?.flatMap(page => page.products ?? []) ?? [];
  console.log(error)
  
  return (
    <Wrapper>
      <Hero />
      {
        error || isError ? (
          <div>{error?.data?.message || "Something Went Wrong. Please try again later."}</div>
        ) : (
          <ProductCarouselContainer>
        
          <CategoryTitle>Best selling products</CategoryTitle>

        
          <CustomCarousel responsive={productCarouselResponsive}>
            {isLoading ? (
              [0, 1, 2, 3, 4, 5].map(index => (
                <SkeletonProductCard key={index} />
              ))
            ) : products.length > 0 ? (
              products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <div>No data found</div>
            )}
          </CustomCarousel>
          
          
          
        

          {<ViewAllButton onClick={() => navigate("#")}>View All Products</ViewAllButton>}
        </ProductCarouselContainer>
        
        )
      }
      
      <Categories />
      
    </Wrapper>
  )
}

export default LandingPage