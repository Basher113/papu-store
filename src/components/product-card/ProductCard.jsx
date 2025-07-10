import { Wrapper, ImageContainer, InfoContainer, ProductName, ProductPriceContainer, AddToCartButton  } from "./productCard.styles"
import { truncateStr } from "../../utils/truncate/truncate";
import Button, { BUTTON_TYPE_CLASSES } from "../button/Button";

const ProductCard = ({product}) => {
  const {title, image, price} = product;

  return (
    <Wrapper>
      <ImageContainer>
        <img src={image} alt={title + '. image thumbnail'} loading="lazy" width="100" height="200"/>
      </ImageContainer>
      <InfoContainer>
        <ProductName>{truncateStr(title)}</ProductName>
        <ProductPriceContainer>
          <span className="discounted-price">${price}</span>
          <span className="original-price">$10</span>
        </ProductPriceContainer>
        <Button buttonType={BUTTON_TYPE_CLASSES.addToCart}>Add To Cart</Button>
      </InfoContainer>

    </Wrapper>
  )
}

export default ProductCard