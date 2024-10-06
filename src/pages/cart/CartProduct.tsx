import { useContext, useState } from 'react';
import CartContext from './CartContext';
import { TbTrash, TbTruckDelivery } from 'react-icons/tb';
import PriceDisplay from './PriceDisplay';

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
      {feedbackMessage && <div className="feedback-message">{feedbackMessage}</div>}
      {cart.length > 0 ? (
        cart.map((product) => {
          const discountedPrice = product.discountedPrice || 0;
          const discountExists = product.price > discountedPrice;
          const discountPercentage = discountExists
            ? (((product.price - discountedPrice) / product.price) * 100).toFixed(0)
            : '0';

          return (
            <div key={product.id} className="flex flex-col md:flex-row gap-2 p-5">
              <div className="w-full md:w-1/3 flex-shrink-0 relative">
                {/* sm:max-h-32 sm:max-w-32 */}
                <img
                  className="object-cover w-full  relative"
                  src={product.image}
                  alt={product.imageAlt || 'Product image'}
                />
                {discountExists && (
                  <div className="bg-accent-purple text-neutral-light text-lg font-semibold absolute p-6 right-1 top-1 w-10 h-10 rounded-full inline-flex items-center justify-center">
                    {discountPercentage}%
                  </div>
                )}
              </div>
              <div className="w-full flex flex-col justify-between p-2 border">
                <div className="flex justify-between text-tex font-semibold">
                  <h2 className="mb-2">{product.title}</h2>
                  <span>{product.quantity}</span>
                </div>
                <PriceDisplay price={product.price} discountedPrice={discountedPrice} />
                <div className="flex gap-2">
                  <div className="flex items-center gap-2 border rounded">
                    <div className="flex items-center px-1 rounded">
                      <p className="pl-1 pr-2 py-2 text-neutral-muted flex gap-1 text-xs font-semibold">
                        <TbTruckDelivery />
                        Free shipping
                      </p>
                    </div>
                  </div>
                  <div className="items-center md:gap-4 border rounded px-3 py-1">
                    <button
                      onClick={() => handleRemove(product.id)}
                      type="button"
                      className="text-xs py-1 text-neutral-muted hover:text-error-hover font-semibold flex items-center gap-2"
                      aria-label={`Remove ${product.title} from cart`}
                    >
                      <TbTrash />
                      Remove
                    </button>
                  </div>
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
