import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/landing/landing";
import Login from "./pages/login/login";
import Dashboard from "./pages/dashboard/dashboard";
import Signup from "./pages/signup/signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/landing",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

export default router;
