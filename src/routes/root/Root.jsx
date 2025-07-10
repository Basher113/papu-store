import Header from "../../components/header/Header"
import { Outlet } from "react-router-dom"
import { Wrapper } from "./root.styles"
import { useFetch } from "../../custom-hooks/useFetch"
const Root = () => {
  const products = useFetch("https://fakestoreapi.in/api/products?limit=80");
  
  return (
    <>
      <Header />
      <Wrapper>
        <Outlet context={products}/>
      </Wrapper>
    </>
  )
}

export default Root