import { Wrapper, ImageContainer, InfoContainer, ProductName, ProductPriceContainer, AddToCartButton, SkeletonLoaderProductImage, SkeletonLoaderProductName, SkeletonLoaderProductPrice, SkeletonLoaderAddToCartButton  } from "./productCard.styles"
import { truncateStr } from "../../utils/truncate/truncate";
import Button, { BUTTON_TYPE_CLASSES } from "../button/Button";
import SkeletonLoader from "../skeleton-loader/SkeletonLoader";
import { useNavigate } from "react-router-dom";
import { useAddProductToCartMutation } from "../../reducers/slice/carts/cart.slice";
import { toast } from "react-toastify";


const ProductCard = ({product}) => {
  const navigate = useNavigate()
  const {name, imageUrl, price, id} = product;
  const [addProductToCart, { isLoading }] = useAddProductToCartMutation()
  
  const addToCartHandler = async (e) => {
    e.stopPropagation(); // for propagete or don't call the wrapper onClick
    try {
      const result = await addProductToCart({productId: id, quantity: 1}).unwrap();
      console.log(result);
      toast.success(result.message)
  
    } catch (error) {
      toast.error(error?.data?.message || "Something went wrong. Please try again later.")
      console.log("Add to cart error:", error);
    }
  }

  return (
    <Wrapper onClick={() => navigate(`/product-detail/${id}`)}>
      <ImageContainer src={imageUrl} alt={name + '. image thumbnail'} loading="lazy" width="100" height="200" />
       
      <InfoContainer>
        <ProductName>{truncateStr(name, 60)}</ProductName>
        <ProductPriceContainer>
          <span className="discounted-price">${price}</span>
          <span className="original-price">$10</span>
        </ProductPriceContainer>
        <Button onClick={(e) => addToCartHandler(e)} buttonType={BUTTON_TYPE_CLASSES.addToCart} disable={isLoading}>Add To Cart</Button>
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