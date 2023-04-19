import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./component/Home/Home";
import Main from "./component/Layout/Main";
import Footer from "./component/Footer/Footer";
import LogIn from "./component/LogIn/LogIn";
import Register from "./component/Register/Register";
import Header from "./component/Header/Header";
import AuthProviders from "./AuthProvider/AuthProviders";
import PrivetRout from "./component/PrivetRout/PrivetRout";
import Order from "./component/Order/Order";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
    {
      path: "/",
      element: <Home></Home>
    },
    {
      path: "/header",
      element: <Header></Header>
    },
    {
      path: "/register",
      element: <Register></Register>
    },
    {
      path: "/login",
      element: <LogIn></LogIn>
    },
    {
      path: "/footer",
      element: <Footer></Footer>
    },
    {
      path: "/order",
      element: <PrivetRout> <Order></Order> </PrivetRout>
    },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
    <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>
);
