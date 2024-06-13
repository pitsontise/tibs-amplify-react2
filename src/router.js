import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/landing/landing";
import Login from "./pages/login/login";
import Dashboard from "./pages/dashboard/dashboard";
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
]);

export default router;
