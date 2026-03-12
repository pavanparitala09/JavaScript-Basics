import React from "react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router";
import RootLayout from "./components/RootLayout";
import Article from "./components/Article";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";

const App = () => {
  const routingObj = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/user-profile",
          element: <UserProfile />,
        },
        {
          path: "/article/:articleid",
          element: <Article />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routingObj} />;
};

export default App;
