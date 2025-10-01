import Logo from '/img/logo-color.svg';
import { Link, NavLink } from 'react-router-dom';
import { UseAuth } from '../../../context/AuthContext';
import { IoCloseSharp } from 'react-icons/io5';

export const SideBar = ({ onClose }) => {
  const { isAuthenticated, Logout } = UseAuth();

  const handleLogout = () => {
    Logout();
    onClose();
  };

  const navLinkClass =
    'flex items-center text-gray-700 hover:text-purple-600 transition-colors duration-200 px-4 py-3 rounded-lg';
  const activeLinkClass = 'bg-purple-100 text-purple-600 font-bold';

  return (
    <div className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden animate-fade-in-right">
      <aside className="relative flex flex-col w-[280px] h-full bg-white border-r border-gray-200 shadow-lg p-5">
        <div className="flex items-center justify-between mb-8">
          <Link to="/" onClick={onClose}>
            <img
              alt="SellAll Logo"
              src={Logo}
              className="w-[120px] rounded-xl"
            />
          </Link>
          <button
            onClick={onClose}
            className="p-2 text-gray-500 rounded-full hover:bg-gray-100"
          >
            <IoCloseSharp size={24} />
          </button>
        </div>

        <nav className="flex-1 space-y-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${navLinkClass} ${isActive ? activeLinkClass : ''}`
            }
            onClick={onClose}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${navLinkClass} ${isActive ? activeLinkClass : ''}`
            }
            onClick={onClose}
          >
            About
          </NavLink>
          <NavLink
            to="/allProducts"
            className={({ isActive }) =>
              `${navLinkClass} ${isActive ? activeLinkClass : ''}`
            }
            onClick={onClose}
          >
            Shop
          </NavLink>
          <NavLink
            to="/ShoppingCar"
            className={({ isActive }) =>
              `${navLinkClass} ${isActive ? activeLinkClass : ''}`
            }
            onClick={onClose}
          >
            Shopping Cart
          </NavLink>
          {isAuthenticated && (
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `${navLinkClass} ${isActive ? activeLinkClass : ''}`
              }
              onClick={onClose}
            >
              Profile
            </NavLink>
          )}
        </nav>

        <div className="mt-auto pt-4 border-t border-gray-200">
          {isAuthenticated ? (
            <Link
              to="/login"
              onClick={handleLogout}
              className="block w-full text-center px-4 py-3 font-semibold text-white bg-purple-600 rounded-full hover:bg-purple-700 transition-colors duration-200"
            >
              Logout
            </Link>
          ) : (
            <>
              <Link
                to="/login"
                onClick={onClose}
                className="block w-full text-center px-4 py-3 font-semibold text-purple-600 border border-purple-600 rounded-full hover:bg-purple-50 transition-colors duration-200"
              >
                Login
              </Link>
              <Link
                to="/register"
                onClick={onClose}
                className="block w-full text-center mt-2 px-4 py-3 font-semibold text-white bg-purple-600 rounded-full hover:bg-purple-700 transition-colors duration-200"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </aside>
    </div>
  );
};
