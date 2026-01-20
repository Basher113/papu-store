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
  let {data, isLoading, error,} = useGetProductsInCategoryInfiniteQuery("computer") // Will change later!.
  const allResults = data?.pages.flat() ?? [];


  return (
    <Wrapper>
      <Hero />
      <ProductCarouselContainer>
        <CategoryTitle>Best selling products</CategoryTitle>
        {!error && !isLoading && allResults.length > 0 && (
          <CustomCarousel responsive={productCarouselResponsive}>
            {allResults.flatMap(res =>
              res.products?.map(product => (
                <ProductCard key={product.id} product={product} />
              )) ?? []
            )}
          </CustomCarousel>
        )}
        {<ViewAllButton onClick={() => navigate("#")}>View All Products</ViewAllButton>}
      </ProductCarouselContainer>
      
      <Categories />
      
    </Wrapper>
  )
}

export default LandingPage