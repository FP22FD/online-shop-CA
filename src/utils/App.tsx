import Items from "../pages/cardpage/Items";
import Product from "../pages/productpage/Product";
import Checkout from "../pages/checkoutpage/Checkout";
import Contact from "../pages/contactpage/Contact";
import Home from "../pages/homepage/Home";


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
      {
        <RouterProvider router={router} />
      }
    </>
  )
}

export default App
