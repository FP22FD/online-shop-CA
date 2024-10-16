import Checkout from './pages/checkout/Checkout';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';
import Layout from './shared/components/Layout';
import PageNotFound from './pages/notFound/NotFound';
import Cart from './pages/cart/Cart';
import ProductDetails from './pages/product/ProductDetails';
import Products from './pages/home/components/Products';
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

function ErrorPage() {
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
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}

export default App;
