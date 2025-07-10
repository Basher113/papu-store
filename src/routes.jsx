import LandingPage from "./routes/landing-page/LandingPage";
import ProductCategory from "./routes/product-category/ProductCategory";
import Products from "./routes/products/Products";
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
        path: "products",
        element: <Products />
      },
      {
        path: ":category",
        element: <ProductCategory />
      }
    ]
  }
]