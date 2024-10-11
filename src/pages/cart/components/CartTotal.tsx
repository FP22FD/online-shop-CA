import { useNavigate } from 'react-router-dom';
import useCartStore from '../../../store/cartStore';

function Summary() {
  const navigate = useNavigate();
  const { cart, clearCart, subtotal, totalDiscount, totalPrice } = useCartStore();

  function handleCheckout(event: React.MouseEvent<HTMLElement>) {
    event.preventDefault();
    clearCart();
    navigate('/checkout');
  }

  return (
    <>
      {cart.length > 0 ? (
        <div className="shadow-md mt-10 sm:mt-4 border max-w-full md:w-2/5 h-fit">
          <div className="flex flex-col gap-6 p-5 sm:p-3">
            <div className="w-full flex flex-col justify-between p-4 sm:p-2 border space-y-2 sm:space-y-1">
              <h2 className="mb-2 tracking-tight text-text font-semibold text-md">Summary</h2>
              <hr />
              <p className="flex justify-between text-sm">
                Subtotal
                <span>{subtotal}</span>
              </p>
              <p className="flex justify-between text-sm">
                Discount<span>{totalDiscount}</span>
              </p>
              <p className="flex justify-between text-sm">
                Shipping
                <span>FREE</span>
              </p>
              <p className="flex justify-between font-semibold text-md">
                Total
                <span>{totalPrice.toFixed(2)}</span>
              </p>
              <div className="flex justify-center pt-6 sm:pt-3">
                <button
                  type="button"
                  onClick={handleCheckout}
                  className="px-3 py-2 rounded ring-[1px] bg-primary-light ring-primary-light ring-inset text-primary-dark font-bold hover:bg-primary hover:text-neutral-light transition-colors duration-200 text-sm"
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
