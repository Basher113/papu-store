import { Wrapper, ImageContainer, InfoContainer, ProductName, ProductPriceContainer, AddToCartButton, SkeletonLoaderProductImage, SkeletonLoaderProductName, SkeletonLoaderProductPrice, SkeletonLoaderAddToCartButton  } from "./productCard.styles"
import { truncateStr } from "../../utils/truncate/truncate";
import Button, { BUTTON_TYPE_CLASSES } from "../button/Button";
import SkeletonLoader from "../skeleton-loader/SkeletonLoader";
import { useOutletContext } from "react-router-dom";
import { addProductToCart } from "../../utils/cart/cart";

const ProductCard = ({product}) => {
  const {title, image, price} = product;
  const {cart, setCart} = useOutletContext();
  
  const addToCartHandler = () => {
    setCart(addProductToCart(cart, product))
  }

  console.log(cart);

  return (
    <Wrapper>
      <ImageContainer src={image} alt={title + '. image thumbnail'} loading="lazy" width="100" height="200" />
       
      <InfoContainer>
        <ProductName>{truncateStr(title, 60)}</ProductName>
        <ProductPriceContainer>
          <span className="discounted-price">${price}</span>
          <span className="original-price">$10</span>
        </ProductPriceContainer>
        <Button onClick={addToCartHandler} buttonType={BUTTON_TYPE_CLASSES.addToCart}>Add To Cart</Button>
      </InfoContainer>

    </Wrapper>
  )
}

export const SkeletonProductCard = () => {
  return (
    <SkeletonLoader>
      <Wrapper>
        <SkeletonLoaderProductImage />
        <InfoContainer>
          <SkeletonLoaderProductName />
          <SkeletonLoaderProductName />
          <ProductPriceContainer>
            <SkeletonLoaderProductPrice />
            <SkeletonLoaderProductPrice />
          </ProductPriceContainer>
          <SkeletonLoaderAddToCartButton />
        </InfoContainer>
      </Wrapper>
    </SkeletonLoader>
  )
}

export default ProductCard