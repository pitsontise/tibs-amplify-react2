import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/landing/landing";
import Login from "./pages/login/login";
import Dashboard from "./pages/dashboard/dashboard";

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
]);

export default router;
