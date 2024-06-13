
import { createBrowserRouter } from "react-router-dom";
import LandingPage from './landing/landing';
import Login from "./pages/login/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
  },
  {
    path: "/landing",
    element: <LandingPage/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
]);

export default router;
