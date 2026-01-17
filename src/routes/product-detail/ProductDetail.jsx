import {truncateStr} from "../../utils/truncate/truncate"
import { useNavigate, useParams } from 'react-router-dom'
import Button, { BUTTON_TYPE_CLASSES } from '../../components/button/Button'
import { ProductDetailContainer, ProductInfo, SkeletonProductDetailImage, SkeletonProductDetailTitle, SkeletonProductDetailPrice, Wrapper, SkeletonProductDetailDescription, SkeletonLoaderProductDetailButton } from './productDetail.styles'
import SkeletonLoader from '../../components/skeleton-loader/SkeletonLoader'
import { useGetProductDetailQuery } from "../../reducers/slice/products/product.slice"

const ProductDetail = () => {
  const navigate = useNavigate();
  const {productId} = useParams();
  const {data, isLoading, error, isError} = useGetProductDetailQuery(productId)
  
  const handleBuyNow = () => {
    
    const subTotal = parseFloat(data.price); // for some reason the type of price is string
    navigate("/checkout", {state: {products: [{...data, quantity: 1}], subTotal, isCheckoutFromCart:false }});
  }

  
 
  return (
    <Wrapper>
      {
        isError ? (
          <h2>{error?.data?.message || "Something went wrong"}</h2>
        ) : isLoading ? (
          <SkeletonLoaderProductDetail />
        ) : data ? (
          <ProductDetailContainer>
            <img src={data.imageUrl} alt="" height="400" width="400" />
            <ProductInfo>
              <div className="product-detail-title">{data.name}</div>
              <div className="product-detail-reviews">
                <div className="stars">⭐⭐⭐⭐⭐</div>
                <span className="reviews-count">(150 reviews)</span>
              </div>
              <div className="product-detail-price">${data.price}</div>
              <div className="product-detail-description">{truncateStr(data.description, 700)}</div>
              <div className='buttons-container'>
                <Button buttonType={BUTTON_TYPE_CLASSES.addToCart}>Add To Cart</Button>
                <Button onClick={handleBuyNow}>Buy Now</Button>
              </div>
            </ProductInfo>
          </ProductDetailContainer>
        ) : (
          <h2>Something Went Wrong?</h2>
        )
      }
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