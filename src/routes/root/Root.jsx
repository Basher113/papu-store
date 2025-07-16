import Header from "../../components/header/Header"
import { Outlet } from "react-router-dom"
import { Wrapper } from "./root.styles"
import { useState } from "react"
import { getCartCount } from "../../utils/cart/cart"
const Root = () => {
  const [cart, setCart] = useState([
    {
      id: crypto.randomUUID(),
      quantity: 1,
      product: {
        id: 8,
        title: "Samsung Galaxy S21 FE 5G (Lavender, 8GB, 128GB Storage)",
        image: "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691073671025-galaxy S21 FE.jpg",
        price: 434,
        description: "Pro-grade Camera with AI Single Take, Portrait Mode, Night Mode and 30X Space zoom. Dual Recording: Film in both wide and selfie angles at the same time | 12MP F1.8 Main Camera (Dual Pixel AF & OIS) + 12MP UltraWide Camera (123° FOV) + 8MP Telephoto Camera (3x Optic Zoom, 30X Space Zoom, OIS) | 32 MP F2.2 Front Camera.\r\n16.28cm (6.4-inch) Dynamic AMOLED 2X Display with120Hz Refresh rate for Smooth scrolling. Intelligent Eye Comfort Shield, New 19.5:9 Screen Ratio with thinner bezel, 1080x2340 (FHD+) Resolution.\r\n5G Ready with Octa-core Exynos 2100 (5nm) Processor. Android 12 operating system. Dual Sim.\r\nIconic Contour Cut Design with 7.9 mm thickness. Gorilla Glass Victus and IP68 Water Resistant .",
        category: "mobile",
        discount: 9,
      }  
    }
])
  const cartCount = getCartCount(cart);
  return (
    <>
      <Header cartCount={cartCount}/>
      <Wrapper>
        <Outlet context={{cart: cart, setCart: setCart}}/>
      </Wrapper>
    </>
  )
}

export default Root