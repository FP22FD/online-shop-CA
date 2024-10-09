import { useContext, useState } from 'react';
import CartContext from '../../../contexts/CartContext';
import { TbTrash } from 'react-icons/tb';
import PriceDisplay from './PriceDisplay';
import { Link } from 'react-router-dom';

function CartProduct() {
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);
  const cartContext = useContext(CartContext);
  const { cart, removeToCart } = cartContext;

  const handleRemove = (productId: string) => {
    removeToCart(productId);
    setFeedbackMessage('The product was removed from your cart!');

    setTimeout(() => {
      setFeedbackMessage(null);
    }, 3000);
  };

  return (
    <>
      {feedbackMessage && (
        <div className="feedback-message absolute top-[-40px] left-1/2 transform -translate-x-1/2 text-success text-xs sm:text-sm md:text-base font-semibold whitespace-nowrap">
          {feedbackMessage}
        </div>
      )}
      {cart.length > 0 ? (
        cart.map((product) => {
          const discountedPrice = product.discountedPrice || 0;
          const discountExists = product.price > discountedPrice;
          const discountPercentage = discountExists
            ? (((product.price - discountedPrice) / product.price) * 100).toFixed(0)
            : '0';

          return (
            <div key={product.id} className="flex sm:flex-row gap-2 p-5">
              <div className="flex relative">
                <div className="w-20">
                  <Link to={`/products/${product.id}`}>
                    <img
                      className="w-full object-cover h-full"
                      width={500}
                      src={product.image}
                      alt={product.imageAlt || 'Product image'}
                    />
                  </Link>
                </div>
                {discountExists && (
                  <div className="absolute right-1 top-1 flex items-center">
                    <div className="bg-accent-purple text-neutral-light flex items-center justify-center rounded-full font-semibold text-xs p-4 w-6 h-6">
                      {discountPercentage}%
                    </div>
                  </div>
                )}
              </div>

              <div className="flex flex-col w-full px-1 justify-between">
                <div className="flex text-tex font-semibold">
                  <h2 className="text-sm sm:text-base">{product.title}</h2>
                </div>

                <PriceDisplay price={product.price} discountedPrice={discountedPrice} />

                <div className="flex justify-between text-tex">
                  <h2 className="text-sm">Qty: {product.quantity}</h2>
                  <button
                    onClick={() => handleRemove(product.id)}
                    type="button"
                    className="text-neutral-muted hover:text-error-hover text-lg"
                    aria-label={`Remove ${product.title} from cart`}
                  >
                    <TbTrash />
                  </button>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="flex justify-center items-center min-h-[400px]">
          <p className="text-center font-semibold">Your cart is empty!</p>
        </div>
      )}
    </>
  );
}

export default CartProduct;
