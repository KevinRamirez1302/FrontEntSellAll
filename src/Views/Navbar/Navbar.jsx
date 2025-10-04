import navSvg from '/img/logo-color.svg';
import { useState, useEffect } from 'react';
import { UseAuth } from '../../../context/AuthContext.jsx';
import { Link } from 'react-router-dom';
import { SideBar } from '../sidebar/sidebar.jsx';
import {
  IconButton,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  Button,
  MenuList,
  MenuDivider,
} from '@chakra-ui/react';
import { MdShoppingCart } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { isAuthenticated, user, Logout } = UseAuth();

  // Cerrar sidebar con ESC
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && open) {
        setOpen(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [open]);

  // Prevenir scroll cuando sidebar está abierto
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  const variants = {
    open: { x: 0 },
    closed: { x: '-100%' },
  };

  const handleLogout = () => {
    Logout();
  };

  return (
    <>
      <nav
        className="bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center" aria-label="SellAll Home">
            <img src={navSvg} className="h-8 mr-3 rounded" alt="SellAll Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              SellAll
            </span>
          </Link>

          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu"
            aria-expanded={open}
            aria-label="Toggle mobile menu"
            onClick={() => setOpen(!open)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="items-center font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-6 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {isAuthenticated && (
                <li>
                  <Menu>
                    <MenuButton as={Button} colorScheme="pink" size="sm">
                      Profile
                    </MenuButton>
                    <MenuList>
                      <MenuGroup title="Profile">
                        <MenuItem as={Link} to="/Profile">
                          My Account
                        </MenuItem>
                        <MenuItem as={Link} to="/payments">
                          Payments
                        </MenuItem>
                      </MenuGroup>
                      <MenuDivider />
                      <MenuGroup title="Help">
                        <MenuItem as={Link} to="/docs">
                          Docs
                        </MenuItem>
                        <MenuItem as={Link} to="/faq">
                          FAQ
                        </MenuItem>
                      </MenuGroup>
                    </MenuList>
                  </Menu>
                </li>
              )}

              <li>
                <Link
                  to="/"
                  className="block py-2 px-3 text-violet-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-violet-900 md:p-0 dark:text-blue-500 md:dark:hover:text-blue-400"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/allProducts"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500"
                >
                  Shop
                </Link>
              </li>

              {isAuthenticated && (
                <li>
                  <Link to="/ShoppingCar">
                    <IconButton
                      colorScheme="purple"
                      aria-label="View shopping cart"
                      icon={<MdShoppingCart />}
                      size="sm"
                    />
                  </Link>
                </li>
              )}

              {!isAuthenticated ? (
                <>
                  <li>
                    <Link
                      className="block py-2 px-3 text-purple-800 font-bold hover:text-purple-600 transition-colors"
                      to="/login"
                    >
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="inline-block rounded-xl bg-purple-900 px-4 py-2 font-medium text-white transition duration-200 hover:bg-purple-600 active:bg-purple-700 dark:bg-purple-400 dark:text-white dark:hover:bg-purple-300 dark:active:bg-purple-200"
                      to="/register"
                    >
                      Sign Up
                    </Link>
                  </li>
                </>
              ) : (
                <li>
                  <button
                    onClick={handleLogout}
                    className="block py-2 px-3 text-purple-800 font-bold hover:text-purple-600 transition-colors cursor-pointer bg-transparent border-0"
                    type="button"
                  >
                    Logout
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            {/* Sidebar */}
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={variants}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="fixed top-0  z-[9999] over left-0 w-4/5 sm:w-3/5 md:w-2/5 lg:w-1/4 h-full "
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
            >
              <SideBar onClose={() => setOpen(false)} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
