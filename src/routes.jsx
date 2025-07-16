import Checkout from "./routes/checkout/Checkout";
import LandingPage from "./routes/landing-page/LandingPage";
import ProductCategory from "./routes/product-category/ProductCategory";

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
        path: "checkout",
        element: <Checkout />
      }
    ]
  }
]