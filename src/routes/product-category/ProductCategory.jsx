import ProductCard, { SkeletonProductCard } from "../../components/product-card/ProductCard";

import {  useParams } from "react-router-dom";

import { Wrapper, ProductsContainer, SkeletonLoaderCategoryTitle, ViewMoreButton } from "./productCategory.styles";
import { useFetch } from "../../custom-hooks/useFetch";

import SkeletonLoader from "../../components/skeleton-loader/SkeletonLoader";
import Button from "../../components/button/Button";

const ProductCategory = () => {
  const {category} = useParams();
  const url = category === "all" ? "https://fakestoreapi.in/api/products?limit=10" : `https://fakestoreapi.in/api/products/category?type=${category}&limit=10`
  const categoryProducts = useFetch(url);
  
  return (
    <Wrapper>
      {!categoryProducts.loading ? 
        <>
          <h2>{category === "all" ? "All Products" : category}</h2>
          <ProductsContainer>
            {categoryProducts.data.products.map((product) => {
              return <ProductCard key={product.id} product={product}/>
            })}
          </ProductsContainer>
          <ViewMoreButton>View More</ViewMoreButton>
        </> :
        <SkeletonLoaderProductCategory />
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