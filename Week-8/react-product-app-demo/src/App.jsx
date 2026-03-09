import React from 'react'
import { createBrowserRouter,Outlet,Navigate, RouterProvider } from 'react-router'
import Home from './components/Home'
import ContectUs from './components/ContectUs'
import ProductList from './components/ProductList'
import Products from './components/Product'
import RootLayout from './components/RootLayout'

export default function App() {

  const routingObj = createBrowserRouter([
    {
      path:"",
      element:<RootLayout />,
      children:[
        {
          path:"",
          element:<Home />
        },
        {
          path:"/product",
          element:<Products />
        },
         {
          path:"/productlist",
          element:<ProductList />
         },
         {
          path:"contactus",
          element:<ContectUs />
         }

      ]
    }
  ])
  return <RouterProvider router={routingObj} />
}
