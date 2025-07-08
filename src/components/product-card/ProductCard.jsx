import { Wrapper, ImageContainer, InfoContainer, ProductName, ProductPriceContainer, AddToCartButton  } from "./productCard.styles"
import { truncateStr } from "../../utils/truncate";
import { BUTTON_TYPE_CLASSES } from "../button/Button";

const ProductCard = ({title, image, price}) => {
  
  return (
    <Wrapper>
      <ImageContainer>
        <img src={image} alt={title + '. Image'} width="100" height="200"/>
      </ImageContainer>
      <InfoContainer>
        <ProductName>{truncateStr(title)}</ProductName>
        <ProductPriceContainer>
          <span className="discounted-price">${price}</span>
          <span className="original-price">$10</span>
        </ProductPriceContainer>
        <AddToCartButton buttonType={BUTTON_TYPE_CLASSES.primary}>Add To Cart</AddToCartButton>
      </InfoContainer>

    </Wrapper>
  )
}

export default ProductCard