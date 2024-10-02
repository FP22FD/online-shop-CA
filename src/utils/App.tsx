import Checkout from '../pages/checkout/Checkout';
import Contact from '../pages/contact/Contact';
import Home from '../pages/home/Home';
import Layout from '../components/layout/Layout';
import PageNotFound from '../pages/notFound/NotFound';
import Cart from '../pages/cart/Cart';
import ProductDetails from '../pages/product/ProductDetails';
import Products from '../pages/home/Products';
import { CartProvider } from '../pages/cart/CartContext';
import { createBrowserRouter, Link, RouterProvider, useRouteError } from 'react-router-dom';

function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  // Uncaught ReferenceError: path is not defined
  return (
    <div>
      <h1 className="text-3xl text-neutral-grayish-blue text-center">An error has occurred.</h1>
      <Link className="hover:text-gray-200" to="/">
        Home
      </Link>
    </div>
  );
}

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/products',
          element: <Products />,
        },
        {
          path: '/products/:id',
          element: <ProductDetails />,
        },
        {
          path: '/cart',
          element: <Cart />,
        },
        {
          path: '/checkout',
          element: <Checkout />,
        },
        {
          path: '/contact',
          element: <Contact />,
        },
      ],
    },
    {
      path: '*',
      element: <PageNotFound />,
    },
  ]);

  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
