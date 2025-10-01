import React, { useState } from 'react';
import Logo from '/img/logo-color.svg';
import Shopping from '/img/shopping-cart.png';
import { Link } from 'react-router-dom';
import { UseAuth } from '../../../context/AuthContext';
import { FaBars, FaTimes } from 'react-icons/fa'; // You'll need to install 'react-icons'

// Reusable component for navigation links
const NavLink = ({ to, children, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="select-none flex items-center px-4 py-[.775rem] my-[.4rem] rounded-[.95rem] cursor-pointer flex-grow text-[1.15rem] text-stone-500 hover:text-dark transition-colors duration-200"
  >
    {children}
  </Link>
);

export const AdminSideBar = (props) => {
  const { isAuthenticated, Logout } = UseAuth();
  const [isOpen, setIsOpen] = useState(false);

  // Function to close the menu on mobile
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button (Hamburger) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 text-2xl text-violet-800"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Overlay for mobile view when menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar Container */}
      <div
        className={` hidden sm:block  md:block fixed z-40 inset-y-0 left-0 transition-transform duration-300 ease-in-out
                    ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <aside
          className="flex flex-col shrink-0 lg:w-[300px] w-[250px] m-0 bg-white border-r border-r-dashed border-r-neutral-200 loopple-fixed-start"
          id="sidenav-main"
        >
          {/* Logo Section */}
          <div className="flex shrink-0 px-8 items-center justify-between h-[96px]">
            <Link to="/" onClick={handleLinkClick}>
              <img
                alt="Your store's logo"
                src={Logo}
                className="w-16 rounded-md"
              />
            </Link>
          </div>
          <div className="hidden border-b border-dashed lg:block border-neutral-200"></div>

          {/* User Profile Section */}
          <div className="flex items-center justify-between px-8 py-5">
            <div className="flex items-center mr-5">
              <div className="mr-5">
                <div className="inline-block relative shrink-0 cursor-pointer rounded-[.95rem]">
                  <img
                    className="w-[40px] h-[40px] shrink-0 inline-block rounded-[.95rem]"
                    src={Shopping}
                    alt="shopping cart icon"
                  />
                </div>
              </div>
              <div className="mr-2">
                <p className="transition-colors duration-200 text-[1.075rem] font-medium text-secondary-inverse">
                  {props.name}
                </p>
              </div>
            </div>
          </div>
          <div className="hidden border-b border-dashed lg:block border-neutral-200"></div>

          {/* Main Navigation */}
          <nav className="relative pl-3 my-5">
            <ul className="flex flex-col w-full font-medium">
              <li>
                <NavLink to="/" onClick={handleLinkClick}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" onClick={handleLinkClick}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/allProducts" onClick={handleLinkClick}>
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink to="/ShoppingCar" onClick={handleLinkClick}>
                  Shopping Cart
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* Authentication Section */}
          <div className="mt-auto p-4 flex flex-col items-center">
            {isAuthenticated ? (
              <button
                onClick={() => {
                  Logout();
                  handleLinkClick();
                }}
                className="w-full m-1 text-purple-800 font-bold text-lg text-center"
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={handleLinkClick}
                  className="w-full m-1 text-purple-800 font-bold text-lg text-center"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  onClick={handleLinkClick}
                  className="w-full m-1 rounded-xl bg-purple-900 px-3 py-2 font-medium text-white text-center transition duration-200 hover:bg-purple-600"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </aside>
      </div>
    </>
  );
};
