import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Profile from "../Pages/Profile/Profile";
import Contact from "../Pages/Contact/Contact";
import Agents from "../Pages/Agents/Agents";
import Blogs from "../Pages/Blogs/Blogs";
import DetailEstate from "../Pages/DetailEstate/DetailEstate";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement :<ErrorPage></ErrorPage>,
      children : [
        {
            path: "/",
            element: <Home></Home>,
            loader : ()=> fetch('/estate.json')
        },
        {
            path: "/register",
            element: <Register></Register>,
        },
        {
            path: "/estate-details/:id",
            element: <PrivateRoutes><DetailEstate></DetailEstate></PrivateRoutes>,
            loader : ()=> fetch('/estate.json')
        },
        {
            path: "/login",
            element: <Login></Login>,
        },
        {
            path: "/agents",
            element:<PrivateRoutes><Agents></Agents></PrivateRoutes>,
        },
        {
            path: "/profile",
            element: <PrivateRoutes><Profile /></PrivateRoutes>,
        },
        {
            path: "/blogs",
            element: <Blogs></Blogs>,
        },
        {
            path: "/contact",
            element: <Contact></Contact>,
        },
      ]
    },
  ]);

  export default router