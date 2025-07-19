import { Wrapper, ImageContainer, InfoContainer, ProductName, ProductPriceContainer, AddToCartButton, SkeletonLoaderProductImage, SkeletonLoaderProductName, SkeletonLoaderProductPrice, SkeletonLoaderAddToCartButton  } from "./productCard.styles"
import { truncateStr } from "../../utils/truncate/truncate";
import Button, { BUTTON_TYPE_CLASSES } from "../button/Button";
import SkeletonLoader from "../skeleton-loader/SkeletonLoader";
import { useNavigate, useOutletContext } from "react-router-dom";
import { addProductToCart } from "../../utils/cart/cart";

const ProductCard = ({product}) => {
  const navigate = useNavigate()
  const {title, image, price, id} = product;
  const {cart, setCart} = useOutletContext();
  
  const addToCartHandler = (e) => {
    e.stopPropagation(); // for propagete or don't call the wrapper onClick
    setCart(addProductToCart(cart, product))
  }


  console.log(cart);

  return (
    <Wrapper onClick={() => navigate(`/product-detail/${id}`)}>
      <ImageContainer src={image} alt={title + '. image thumbnail'} loading="lazy" width="100" height="200" />
       
      <InfoContainer>
        <ProductName>{truncateStr(title, 60)}</ProductName>
        <ProductPriceContainer>
          <span className="discounted-price">${price}</span>
          <span className="original-price">$10</span>
        </ProductPriceContainer>
        <Button onClick={(e) => addToCartHandler(e)} buttonType={BUTTON_TYPE_CLASSES.addToCart}>Add To Cart</Button>
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