import CustomCarousel from "../../components/custom-carousel/CustomCarousel"
import Hero from "../../components/hero/Hero"
import ProductCard, { SkeletonProductCard } from "../../components/product-card/ProductCard"

import { ProductCarouselContainer, Wrapper, CategoryTitle, ViewAllButton, SkeletonLoaderCategoryTitle } from "./landingPage.styles"
import { getPopular } from "../../utils/products/products.utils"
import { useNavigate } from "react-router-dom"
import { useFetch } from "../../custom-hooks/useFetch"
import Categories from "./components/categories/Categories"

const LandingPage = () => {
  const navigate = useNavigate();
  const products = useFetch("https://fakestoreapi.in/api/products?limit=15");
  let popularProducts = []
  if (!products.loading) {
    popularProducts = getPopular(products.data.products);
  }
  
  return (
    <Wrapper>
      <Hero />
      <ProductCarouselContainer>
        <CategoryTitle>Best selling products</CategoryTitle>
        <CustomCarousel>
          {!products.loading ? 
            popularProducts.map((product) => <ProductCard key={product.id} product={product}/>) :
            [0, 1, 2, 3, 4, 5].map(index => <SkeletonProductCard key={index}/>)
          }
        </CustomCarousel>
        <ViewAllButton onClick={() => navigate("products/all")}>View All Products</ViewAllButton>
      </ProductCarouselContainer>
      
      <Categories />
      
    </Wrapper>
  )
}

export default LandingPage