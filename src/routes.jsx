import Cart from "./routes/cart/Cart";
import LandingPage from "./routes/landing-page/LandingPage";
import ProductCategory from "./routes/product-category/ProductCategory";
import ProductDetail from "./routes/product-detail/ProductDetail";
import Root from "./routes/root/Root";

export const routes = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <LandingPage />
      },
      {
        path: "products/:category",
        element: <ProductCategory />
      },
      {
        path: "product-detail/:productId",
        element: <ProductDetail />
      },
      
      {
        path: "cart",
        element: <Cart />
      }
    ]
  }
]