import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Products from "../pages/prodcuts/Products";
import ViewCard from "../pages/viewCard/ViewCard";
import ProdactDetaisl from "../pages/prodactDetaisl/ProdactDetaisl";
import Blog from "../pages/blog/Blog";
import AboutUs from "../pages/aboutUs/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/viewCard",
        element: <ViewCard />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/product/:id",
        element: <ProdactDetaisl />,
      },
      {
        path: "/blog",
        element: <Blog />
      },
      {
        path: "/about",
        element: <AboutUs />
      }
    ],
  },
]);

export default router;
