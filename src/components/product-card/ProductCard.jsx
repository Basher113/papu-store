import { Wrapper, ImageContainer, InfoContainer, ProductName, ProductPriceContainer,  } from "./productCard.styles"
import { truncateStr } from "../../utils/truncate"
const ProductCard = ({title, image, price}) => {
  
  return (
    <Wrapper>
      <ImageContainer>
        <img src={image} alt="gaming product picture" width="100" height="200"/>
      </ImageContainer>
      <InfoContainer>
        <ProductName>{truncateStr(title)}</ProductName>
        <ProductPriceContainer>
          <span className="discounted-price">${price}</span>
          <span className="original-price">$10</span>
        </ProductPriceContainer>
      </InfoContainer>
    </Wrapper>
  )
}

export default ProductCard