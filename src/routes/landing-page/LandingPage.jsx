import CustomCarousel from "../../components/custom-carousel/CustomCarousel"
import Hero from "../../components/hero/Hero"
import ProductCard from "../../components/product-card/ProductCard"
import { useFetch } from "../../custom-hooks/useFetch"

import { ProductCategoryCarouselContainer, Wrapper, CategoryTitle } from "./landingPage.styles"
const LandingPage = () => {
  const gamingProducts = useFetch("https://fakestoreapi.in/api/products/category?type=gaming&limit=8");
  const mobileProducts = useFetch("https://fakestoreapi.in/api/products/category?type=gaming&limit=8")
  
  return (
    <Wrapper>
      <Hero />
        {!gamingProducts.loading ?
          <ProductCategoryCarouselContainer>
            <CategoryTitle>Gaming</CategoryTitle>
            <CustomCarousel>
              {gamingProducts.data.products.map((gamingProduct) => {
                const {id, title, image, price} = gamingProduct
                return <ProductCard key={id} title={title} image={image} price={price}/>
              })
              }
            </CustomCarousel>
          </ProductCategoryCarouselContainer> :
          <div>Loading...</div>
        }

        {!mobileProducts.loading ?
          <ProductCategoryCarouselContainer>
            <CategoryTitle>Mobile</CategoryTitle>
            <CustomCarousel>
              {mobileProducts.data.products.map((mobileProduct) => {
                const {id, title, image, price} = mobileProduct;
                return <ProductCard key={id} title={title} image={image} price={price}/>
              })
              }
            </CustomCarousel>
          </ProductCategoryCarouselContainer> :
          <div>Loading...</div>
        }
        
    </Wrapper>
  )
}

export default LandingPage