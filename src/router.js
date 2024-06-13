import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/landing/landing";
import Login from "./pages/login/login";
import Dashboard from "./pages/dashboard/dashboard";
import Signup from "./pages/signup/signup";
import CompleteSignUp from "./pages/user-sign-up/completeSignUp";

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
    path: "/complete-sign-up",
    element: <CompleteSignUp />,
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
