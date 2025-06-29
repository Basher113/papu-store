import LandingPage from "./routes/landing-page/LandingPage";
import Root from "./routes/root/Root";

export const routes = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <LandingPage />
      }
    ]
  }
]