import React from "react";
import { createBrowserRouter,RouterProvider, Navigate  } from "react-router";
import RootLayout from "./components/RootLayout";
import AddUser from "./components/AddUser";
import UsersList from "./components/UsersList";

export default function App() {
  const routingObj = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children:[
        {
          path:"/adduser",
          element:<AddUser />
        },
        {
          path:"/userslist",
          element:<UsersList />
        }
      ]
    },
  ]);

  return <RouterProvider router={routingObj} />;
}

