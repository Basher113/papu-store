import ProductCard, { SkeletonProductCard } from "../../components/product-card/ProductCard";
import { useGetProductsInCategoryQuery } from "../../reducers/slice/products/product.slice";

import {  useParams } from "react-router-dom";

import { Wrapper, ProductsContainer, SkeletonLoaderCategoryTitle, ViewMoreButton } from "./productCategory.styles";
import SkeletonLoader from "../../components/skeleton-loader/SkeletonLoader";

const ProductCategory = () => {
  const {category} = useParams();
  const {data, isLoading, isError, error} = useGetProductsInCategoryQuery(category);
  console.log(isError, error)
  
  return (
    <Wrapper>
      {error ? (
        <h2>{error.data.message}</h2> 
      ) : isLoading ? ( 
        <SkeletonLoaderProductCategory />
      ) : data ? (
        <>
          <h2>{category === "all" ? "All Products" : category}</h2>
          <ProductsContainer>
            {data &&data.map((product) => {
              return <ProductCard key={product.id} product={product}/>
            })}
          </ProductsContainer>
          <ViewMoreButton>View More</ViewMoreButton>
        </>
      ) : (
        <h1>No Data</h1>
      )
        
      }

     
    </Wrapper>
  )
}

const SkeletonLoaderProductCategory = () => {
  return (
    <SkeletonLoader>
      <Wrapper>
      <SkeletonLoaderCategoryTitle />
      <ProductsContainer>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => {
          return <SkeletonProductCard key={index}/>
        })}
      </ProductsContainer> 
      </Wrapper>
    </SkeletonLoader>
        
  )
}

export default ProductCategory