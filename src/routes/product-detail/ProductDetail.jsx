import { addProductToCart } from '../../utils/cart/cart'
import {truncateStr} from "../../utils/truncate/truncate"
import { useOutletContext, useParams } from 'react-router-dom'
import { useFetch } from '../../custom-hooks/useFetch'
import Button, { BUTTON_TYPE_CLASSES } from '../../components/button/Button'
import { ProductDetailContainer, ProductInfo, SkeletonProductDetailImage, SkeletonProductDetailTitle, SkeletonProductDetailPrice, Wrapper, SkeletonProductDetailDescription, SkeletonLoaderProductDetailButton } from './productDetail.styles'
import SkeletonLoader from '../../components/skeleton-loader/SkeletonLoader'

const ProductDetail = () => {
  const {productId} = useParams();
  const {cart, setCart} = useOutletContext();
  const product = useFetch(`https://fakestoreapi.in/api/products/${productId}`);

  if (product.loading) return <SkeletonLoaderProductDetail />
  
  const addToCartHandler = () => {
    setCart(addProductToCart(cart, product.data.product))
  }

  return (
    <Wrapper>
      <ProductDetailContainer>
        <img src={product.data.product.image} alt="" height="400" width="400" />
        <ProductInfo>
          <div className="product-detail-title">{product.data.product.title}</div>
          <div className="product-detail-price">${product.data.product.price}</div>
          <div className="product-detail-description">{truncateStr(product.data.product.description, 700)}</div>
          <div className='buttons-container'>
            <Button buttonType={BUTTON_TYPE_CLASSES.addToCart} onClick={addToCartHandler}>Add To Cart</Button>
            <Button>Buy Now</Button>
          </div>
        </ProductInfo>
      </ProductDetailContainer>
    </Wrapper>
  )
}

const SkeletonLoaderProductDetail = () => {
  return (
    <SkeletonLoader>
      <Wrapper>
        <ProductDetailContainer>
          <SkeletonProductDetailImage />
          <ProductInfo>
            <SkeletonProductDetailTitle />
            <SkeletonProductDetailTitle />
            <SkeletonProductDetailPrice />
            <SkeletonProductDetailDescription />
            <SkeletonProductDetailDescription />
            <SkeletonProductDetailDescription />
            <SkeletonProductDetailDescription />
            <SkeletonProductDetailDescription />
            <SkeletonProductDetailDescription />
            <SkeletonProductDetailDescription />
            <SkeletonProductDetailDescription />
            <SkeletonProductDetailDescription />
            <SkeletonProductDetailDescription />
            <div className='buttons-container'>
              <SkeletonLoaderProductDetailButton />
              <SkeletonLoaderProductDetailButton />
            </div>
          </ProductInfo>
        </ProductDetailContainer>
      </Wrapper>
    </SkeletonLoader>
  )
}

export default ProductDetail