import ProductCard from "../../components/product-card/ProductCard";

import {  useParams } from "react-router-dom";

import { Wrapper, ProductsContainer } from "./productCategory.styles";
import { useFetch } from "../../custom-hooks/useFetch";
const ProductCategory = () => {
  const {category} = useParams();
  const categoryProducts = useFetch(`https://fakestoreapi.in/api/products/category?type=${category}`)
  if (categoryProducts.loading) return <div>Loading...</div>
  return (
    <Wrapper>
      <h2>{category}</h2>
      <ProductsContainer>
        {categoryProducts.data.products.map((product) => {
          return <ProductCard key={product.id} product={product}/>
        })}
      </ProductsContainer>
    </Wrapper>
  )
}

export default ProductCategory