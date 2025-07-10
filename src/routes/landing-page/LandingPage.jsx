import CustomCarousel from "../../components/custom-carousel/CustomCarousel"
import Hero from "../../components/hero/Hero"
import ProductCard from "../../components/product-card/ProductCard"

import { ProductCarouselContainer, Wrapper, CategoryTitle, ViewAllButton } from "./landingPage.styles"
import { getPopular } from "../../utils/products/products.utils"
import { useNavigate } from "react-router-dom"
import { useFetch } from "../../custom-hooks/useFetch"

const LandingPage = () => {
  const navigate = useNavigate();
  const products = useFetch("https://fakestoreapi.in/api/products?limit=15")
  
  if (products.loading) return <div>Loading...</div>
  const popularProducts = getPopular(products.data.products);
  return (
    <Wrapper>
      <Hero />
      <ProductCarouselContainer>
        <CategoryTitle>Best selling products</CategoryTitle>
        <CustomCarousel>
          {popularProducts.map((product) => <ProductCard key={product.id} product={product}/>)}
        </CustomCarousel>
        <ViewAllButton onClick={() => navigate("products")}>View All Products</ViewAllButton>
      </ProductCarouselContainer>
       
      
    </Wrapper>
  )
}

export default LandingPage