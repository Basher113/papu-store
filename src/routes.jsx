import Cart from "./routes/cart/Cart";
import LandingPage from "./routes/landing-page/LandingPage";
import ProductCategory from "./routes/product-category/ProductCategory";
import ProductDetail from "./routes/product-detail/ProductDetail";
import Login from "./routes/login/Login";
import SignUp from "./routes/signup/SignUp";
import Root from "./routes/root/Root";
import AuthenticatedRoutes from "./routes/authenticated-routes/AuthenticatedRoutes";
import Checkout from "./routes/checkout/Checkout";
import OrderConfirmation from "./routes/order-confirmation/OrderConfirmation";
import MyAccount from "./routes/my-account/MyAccount";
import About from "./routes/about/About";
import Contact from "./routes/contact/Contact";
export const routes = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <LandingPage />
      },

      // Authenticated Routes
      {
        element: <AuthenticatedRoutes />,
        children: [
          {
          path: "cart",
          element: <Cart />
          },

          {
            path: "user/",
            element: <MyAccount />,
          },
        ]
      },

      {
        path: "checkout/",
        element: <Checkout />
      },

      {
        path: "about",
        element: <About />
      },

      {
        path: "contact",
        element: <Contact />
      },
      
      {
        path: "checkout/order-confirmation/",
        element: <OrderConfirmation />
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
        path: "login",
        element: <Login />
      },

      {
        path: "sign-up",
        element: <SignUp />
      }
    ]
  }
]