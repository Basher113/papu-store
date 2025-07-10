import { ProductsContainer, ViewMoreButton, Wrapper } from "./products.styles";
import ProductCard from "../../components/product-card/ProductCard";
import { useFetch } from "../../custom-hooks/useFetch";

const Products = () => {
  const products = useFetch("https://fakestoreapi.in/api/products?limit=20");
  if (products.loading) return <div>Loading...</div>
  return (
    <Wrapper>
      <h2>All Products</h2>
      <ProductsContainer>
        {products.data.products.map((product) => <ProductCard key={product.id} product={product}/>)}
      </ProductsContainer>
      <ViewMoreButton>View More</ViewMoreButton>
    </Wrapper>
  )
}

export default Products