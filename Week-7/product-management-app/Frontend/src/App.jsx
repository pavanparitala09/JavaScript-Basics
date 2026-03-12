import React from 'react';
import Home from './components/Home';
import ProductsList from './components/ProductsList';
import Product from './components/Product';
import ContactUs from './components/ContactUs';
import RootLayout from './components/RootLayout';
import { createBrowserRouter, RouterProvider } from 'react-router';

function App() {
  const routerObj = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'products',
          element: <ProductsList />
        },
        {
          path: 'contactus',
          element: <ContactUs />
        },
        {
          path: 'product',
          element: <Product />
        }
      ]
    }
  ]);

  return (
    <div className="min-h-screen w-full">
      <RouterProvider router={routerObj} />
    </div>
  );
}

export default App;