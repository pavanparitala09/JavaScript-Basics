import React from "react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router";
import RootLayout from "./components/RootLayout";

import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";

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
          path:'/home',
          element:<Home />
        },
      ],
    },
  ]);
  return <RouterProvider router={routingObj} />;
};

export default App;
