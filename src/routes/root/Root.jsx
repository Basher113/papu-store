import Header from "../../components/header/Header"
import { Outlet } from "react-router-dom"
import { Wrapper } from "./root.styles"
const Root = () => {
  return (
    <Wrapper>
      <Header />
      <Outlet />
    </Wrapper>
  )
}

export default Root