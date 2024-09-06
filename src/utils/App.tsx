import Items from "../pages/card/Items";
import Product from "../pages/product/Product";
import Checkout from "../pages/checkout/Checkout";
import Contact from "../pages/contact/Contact";
import Home from "../pages/home/Home";
import MainLayout from "../components/layout/MainLayout";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/product",
      element: <Product />,
    },
    {
      path: "/card",
      element: <Items />,
    },
    {
      path: "/checkout",
      element: <Checkout />,
    },
    {
      path: "/contact",
      element: <Contact />,
    }
  ]);

  return (
    <>
      <MainLayout>
        {
          <RouterProvider router={router} />
        }
      </MainLayout>
    </>
  )
}

export default App
