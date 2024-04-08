import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Profile from "../Pages/Profile/Profile";
import Contact from "../Pages/Contact/Contact";
import Agents from "../Pages/Agents/Agents";
import Blogs from "../Pages/Blogs/Blogs";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children : [
        {
            path: "/",
            element: <Home></Home>,
        },
        {
            path: "/register",
            element: <Register></Register>,
        },
        {
            path: "/login",
            element: <Login></Login>,
        },
        {
            path: "/agents",
            element:<Agents></Agents>,
        },
        {
            path: "/profile",
            element: <Profile></Profile>,
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