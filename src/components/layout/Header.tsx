import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { IoMenuOutline, IoCloseOutline, IoCartOutline } from 'react-icons/io5';

function Header() {
  return (
    <header className="row-start-1 col-span-12">
      <nav className="flex p-5 border border-x-0 border-b-secondary">
        <MenuDesktop />
        <MenuMobile />
      </nav>
    </header>
  );
}

export default Header;

export function CartIcon() {
  return (
    <div className="relative text-3xl">
      <div className="absolute right-0">
        <p className="flex items-center justify-center h-4 w-4 rounded-full text-xs bg-primary">3</p>
      </div>
      <Link to={'/cart'}>
        <IoCartOutline />
      </Link>
    </div>
  );
}

export function MenuDesktop() {
  const pageLinks = [
    { label: 'Home', to: '/' },
    { label: 'Contact', to: '/contact' },
  ];

  return (
    <div className="flex w-full items-center justify-between">
      <NavLink to="/">
        <img src={logo} alt="Logo" />
      </NavLink>

      <div className="md:flex hidden space-x-4">
        {pageLinks.map(({ label, to }) => (
          <NavLink
            key={to}
            className={({ isActive }) =>
              `px-2 py-2 ${isActive ? 'underline  decoration-primary decoration-4' : 'bg-transparent'}`
            }
            to={to}
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

        <button onClick={toggleMenu} className="relative">
          {isMenuOpen ? <IoCloseOutline className="w-8 h-16" /> : <IoMenuOutline className="w-8 h-16" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-28 right-0 p-6 w-svw bg-neutral-light">
          {pageLinks.map(({ label, to }) => (
            <NavLink
              key={to}
              className={({ isActive }) =>
                `flex px-2 py-2 ${isActive ? 'underline  decoration-primary decoration-4' : 'bg-transparent'}`
              }
              to={to}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </>
  );
}
