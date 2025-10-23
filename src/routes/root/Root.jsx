import Header from "../../components/header/Header"
import { Outlet } from "react-router-dom"
import { Wrapper, OutletWrapper } from "./root.styles"

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../../components/footer/Footer"

const Root = () => {
  

  return (
    <Wrapper>
      <Header />
      <OutletWrapper>
        <Outlet/>
      </OutletWrapper>
      <Footer />
      <ToastContainer position="top-center" theme="dark" autoClose={3000} />
    </Wrapper>
  )
}

export default Root