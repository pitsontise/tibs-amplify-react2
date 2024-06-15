import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/landing/landing";
import Login from "./pages/auth/login/login";
import Dashboard from "./pages/dashboard/dashboard";
import Signup from "./pages/auth/signup/signup";
import CompleteSignUp from "./pages/auth/user-sign-up/completeSignUp";
import ForgotPasword from "./pages/auth/forgot-password/forgotPasword";
import ResetPassword from "./pages/auth/reset-password/resetPasword";

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
    path: "/sign-up",
    element: <Signup />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPasword />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
]);

export default router;
