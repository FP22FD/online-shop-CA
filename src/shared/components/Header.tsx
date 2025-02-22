import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { IoMenuOutline, IoCloseOutline, IoCartOutline } from 'react-icons/io5';
import useCartStore from '../../store/cartStore';

function Header() {
  return (
    <header className="row-start-1 col-span-12">
      <nav className="flex p-5 border border-x-0 border-b-secondary" aria-label="Main navigation">
        <MenuDesktop />
        <MenuMobile />
      </nav>
    </header>
  );
}

export default Header;

export function CartIcon() {
  const { cart } = useCartStore();

  const totalQuantity = cart.reduce((prevValue, CurrentValue) => prevValue + (CurrentValue.quantity || 0), 0);

  if (!cart) {
    return null;
  }

  return (
    <Link to={'/cart'} className="relative text-3xl" aria-label="View cart">
      <div className="absolute right-0">
        <p
          className="flex items-center justify-center h-4 w-4 rounded-full text-xs bg-primary-light"
          aria-label="3 items in cart"
        >
          {totalQuantity}
        </p>
      </div>
      <div>
        <IoCartOutline aria-hidden="true" />
      </div>
    </Link>
  );
}

export function MenuDesktop() {
  const pageLinks = [
    { label: 'Home', to: '/' },
    { label: 'Contact', to: '/contact' },
  ];

  return (
    <div className="flex w-full items-center justify-between">
      <NavLink to="/" aria-label="Go to homepage">
        <img src={logo} alt="Website logo" />
      </NavLink>

      <div className="md:flex hidden space-x-4">
        {pageLinks.map(({ label, to }) => (
          <NavLink
            key={to}
            className={({ isActive }) =>
              `px-2 py-2 ${isActive ? 'underline font-semibold decoration-primary-light decoration-4' : 'bg-transparent'}`
            }
            to={to}
            aria-label={`Go to ${label}`}
          >
            {label}
          </NavLink>
        ))}
      </div>

      <div className="hidden md:flex">
        <CartIcon />
      </div>
    </div>
  );
}

export function MenuMobile() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((isOpen) => !isOpen);
  };

  const pageLinks = [
    { label: 'Home', to: '/' },
    { label: 'Contact', to: '/contact' },
  ];

  return (
    <>
      <div className="md:hidden items-center gap-4 flex relative">
        <CartIcon />

        <button
          onClick={toggleMenu}
          className="relative"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? (
            <IoCloseOutline className="w-8 h-16" aria-hidden="true" />
          ) : (
            <IoMenuOutline className="w-8 h-16" aria-hidden="true" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div
          id="mobile-menu"
          className={`md:hidden fixed top-0 right-0 h-full w-64 bg-neutral-light shadow-lg z-20 transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          role="menu"
          aria-label="Mobile navigation"
        >
          <div className="p-6 flex justify-between items-center">
            <h2 className="text-xl font-semibold">Menu</h2>
            <button onClick={() => setMenuOpen(false)} aria-label="Close menu" className="text-text focus:outline-none">
              <IoCloseOutline className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>

          <div className="p-6">
            {pageLinks.map(({ label, to }) => (
              <NavLink
                key={to}
                className={({ isActive }) =>
                  `block px-2 py-2 ${isActive ? 'underline decoration-primary decoration-4' : 'bg-transparent'}`
                }
                to={to}
                onClick={() => setMenuOpen(false)}
                aria-label={`Go to ${label}`}
                role="menuitem"
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
