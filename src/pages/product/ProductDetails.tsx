import { Link, useParams } from 'react-router-dom';
import StarRating from '../../components/shared/StarRating';
import { useFetchProduct } from '../../hooks/fetchProduct';
import { IoArrowBackOutline } from 'react-icons/io5';
import Spinner from '../../components/shared/Spinner';
import { useContext, useState } from 'react';
import CartContext from '../cart/CartContext';
import { CartProduct } from '../../types/products.type';

const ProductDetails = () => {
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);

  const { id } = useParams<{ id: string }>();
  const { data, error, loading } = useFetchProduct(id || '');

  const cartContext = useContext(CartContext);
  const { addToCart } = cartContext;

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return (
      <div role="alert" className="text-center my-5 py-5">
        {error}
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex flex-col items-center justify-center h-64 mx-4">
        <h2 className="text-xl  font-semibold text-error">Product not found</h2>
        <p className="text-light text-center text-sm m-8">
          The product you're looking for doesn't exist. It may have been removed or is unavailable.{' '}
        </p>
        <Link
          to="/"
          className="mt-4 px-4 py-2 rounded font-bold bg-primary-light text-primary-dark hover:bg-primary hover:text-neutral-light transition-colors duration-200"
        >
          Go back to store
        </Link>
      </div>
    );
  }

  const product: CartProduct = {
    id: data.id,
    title: data.title,
    price: data.price,
    discountedPrice: data.discountedPrice,
    image: data.image.url,
    imageAlt: data.image.alt,
    quantity: 1,
  };

  const discountExists = data.discountedPrice < data.price;
  const discountAmount = discountExists ? (data.price - data.discountedPrice).toFixed(2) : '0.00';

  const discountPercentage = discountExists
    ? (((data.price - data.discountedPrice) / data.price) * 100).toFixed()
    : '0.00';

  const handleAddToCart = (product: CartProduct) => {
    addToCart(product);
    setFeedbackMessage('The product is now in your cart!');

    setTimeout(() => {
      setFeedbackMessage(null);
    }, 3000);
  };

  return (
    <section className="flex-grow">
      <div className="container mx-auto mt-10 px-4 md:px-0">
        <div className="flex items-center">
          <Link
            to="/"
            className="flex items-center px-3 py-2 text-xs rounded ring-[1px] ring-primary-light ring-inset hover:bg-primary text-primary-dark hover:text-neutral font-semibold transition-colors duration-200 mb-2"
            aria-label="Go back to store"
          >
            <IoArrowBackOutline aria-hidden="true" className="mr-2" />
            Go back to store
          </Link>
        </div>

        <div className="border-b border-secondary-dark mb-5 flex justify-between text-sm my-10">
          <button type="button" className="text-dark flex items-center pb-2 pr-2 border-b-2 border-primary uppercase">
            <h1 className="font-semibold inline-block">Product details</h1>
          </button>
        </div>

        <div className="shadow-md my-10 border">
          <div className="flex flex-col md:flex-row gap-6 p-5">
            <div className="w-full md:w-1/3 flex-shrink-0">
              {data.image ? (
                <img
                  className="object-cover w-full max-h-64"
                  src={data.image.url}
                  alt={data.image.alt || 'Product image'}
                />
              ) : (
                <p className="text-center">No image available.</p>
              )}
            </div>

            <div className="w-full md:w-2/3 flex flex-col justify-between p-4 border">
              <h2 className="mb-2 tracking-tight text-text font-semibold text-xl">{data.title}</h2>
              <p className="line-clamp-2 whitespace-break-spaces mb-2">{data?.description}</p>
              <div className="flex items-end gap-4 mb-2">
                <p className=" text-text">{data.price}</p>
                <p className="line-through text-text text-xs">{data.discountedPrice}</p>
                {discountExists && (
                  <span className="text-dark text-xs bg-primary-light rounded p-[1px]">Save {discountAmount}</span>
                )}
                {discountExists && (
                  <div className="bg-primary-light text-error text-lg font-semibold absolute rounded p-1 top-1 right-1 hidden">
                    {discountPercentage}%
                  </div>
                )}
              </div>
              <StarRating rating={data.rating || 0} />

              <div className="mt-4 flex items-center gap-2 md:gap-4">
                <div className="flex items-center border border-gray-300 rounded">
                  <button
                    className="px-3 py-2 text-gray-600 hover:bg-gray-200"
                    aria-label="Decrease quantity"
                    type="button"
                  >
                    -
                  </button>
                  <span className="px-3 py-1 text-dark">1</span>
                  <button
                    className="px-3 py-2 text-gray-600 hover:bg-gray-200"
                    aria-label="Increase quantity"
                    type="button"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="p-3 rounded ring-[1px] bg-primary-light ring-primary-light ring-inset text-primary-dark font-bold hover:bg-primary hover:text-neutral-light transition-colors duration-200 text-xs"
                  type="button"
                  aria-label="Add product to cart"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>

          <div className="h-2">{feedbackMessage && <p className="text-success text-center">{feedbackMessage}</p>}</div>

          <article className="flex flex-col mt-6 p-5">
            <h3 className="font-bold mt-6 border-b border-gray-300 pb-2">Reviews</h3>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {data.reviews.length > 0 ? (
                data.reviews.map((review) => (
                  <div className="p-4 border border-gray-300 rounded shadow-sm bg-secondary-light" key={review.id}>
                    <div className="mb-4">
                      <StarRating rating={review.rating} />
                    </div>
                    <blockquote>
                      <i>{review.description}</i>
                      <cite className="flex gap-2 justify-end items-center mt-4">
                        <span className="text-sm text-neutral-muted">-</span>
                        <p className="text-sm text-neutral-muted">{review.username}</p>
                      </cite>
                    </blockquote>
                  </div>
                ))
              ) : (
                <div>No customer reviews yet.</div>
              )}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
