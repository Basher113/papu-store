import CustomCarousel from "../../components/custom-carousel/CustomCarousel"
import Hero from "../../components/hero/Hero"
import ProductCard, { SkeletonProductCard } from "../../components/product-card/ProductCard"

import { ProductCarouselContainer, Wrapper, CategoryTitle, ViewAllButton, SkeletonLoaderCategoryTitle } from "./landingPage.styles"
import { useNavigate } from "react-router-dom"
import Categories from "./components/categories/Categories"
import { useGetProductsInCategoryInfiniteQuery } from "../../reducers/slice/products/product.slice"

const LandingPage = () => {
  const navigate = useNavigate();
  let {data, isLoading, error,} = useGetProductsInCategoryInfiniteQuery("computer") // Will change later!.
  const allResults = data?.pages.flat() ?? [];
  console.log(allResults);


  return (
    <Wrapper>
      <Hero />
      <ProductCarouselContainer>
        <CategoryTitle>Best selling products</CategoryTitle>
        <CustomCarousel>
          {
            error ? (
              <div>{error.data.message || "Something went wrong."} </div>
            ) : isLoading ? (
              [0, 1, 2, 3, 4, 5].map(index => <SkeletonProductCard key={index}/>)
            ) : data ? (
              allResults.map(res => res.products.map((product) => <ProductCard key={product.id} product={product}/>))
            ) : (
              <div>No data found</div>
            )
          }
        </CustomCarousel>
        {<ViewAllButton onClick={() => navigate("#")}>View All Products</ViewAllButton>}
      </ProductCarouselContainer>
      
      <Categories />
      
    </Wrapper>
  )
}

export default LandingPage