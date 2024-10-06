import { useContext } from 'react';
import CartContext from './CartContext';
import { useNavigate } from 'react-router-dom';

function Summary() {
  const navigate = useNavigate();
  const cartContext = useContext(CartContext);
  const { cart, clearCart, subtotal, totalDiscount, totalPrice } = cartContext;

  function handleCheckout(event: React.MouseEvent<HTMLElement>) {
    event.preventDefault();
    clearCart();
    navigate('/checkout');
  }
  return (
    <>
      {cart.length > 0 ? (
        <div className="shadow-md mt-10 border max-w-full md:max-w-sm w-full md:w-2/5 h-fit">
          <div className="flex flex-col gap-6 p-5">
            <div className="w-full flex flex-col justify-between p-4 border space-y-2">
              <h2 className="mb-2 tracking-tight text-text font-semibold text-xl">Summary</h2>
              <hr />
              <p className="flex justify-between">
                Subtotal
                <span>{subtotal}</span>
              </p>
              <p className="flex justify-between">
                Discount<span>{totalDiscount}</span>
              </p>
              <p className="flex justify-between">
                Shipping
                <span>FREE</span>
              </p>
              <p className="flex justify-between font-semibold">
                Total
                <span>{totalPrice.toFixed(2)}</span>
              </p>
              <div className="flex justify-center pt-6">
                <button
                  type="button"
                  onClick={handleCheckout}
                  className="px-3 py-2 rounded ring-[1px] bg-primary-light ring-primary-light ring-inset text-primary-dark font-bold hover:bg-primary hover:text-neutral-light transition-colors duration-200"
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p></p>
      )}
    </>
  );
}

export default Summary;
