import navSvg from '/img/logo-color.svg';
import { SideBar } from '../sidebar/sidebar.jsx';
import { AdminSideBar } from '../sidebar/adminsidebar.jsx';
import { useState } from 'react';
import { UseAuth } from '../../../context/AuthContext.jsx';
import { Link } from 'react-router-dom';
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

  const variants = {
    open: { x: 0 },
    closed: { x: -100, transition: { duration: 0.3 } },
  };

  const { isAuthenticated, user, Logout } = UseAuth();

  return (
    <>
      <nav className=" bg-white border-gray-200 dark:bg-gray-900 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center">
            <img src={navSvg} className="h-8 mr-3 rounded" alt="SellAll Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              SellAll
            </span>
          </Link>

          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-3 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={() => setOpen(!open)}
          >
            Menu
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className=" items-center font-medium text-lg flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link>
                  {isAuthenticated == true ? (
                    <>
                      <Menu>
                        <MenuButton as={Button} colorScheme="pink">
                          Profile
                        </MenuButton>
                        <MenuList>
                          <MenuGroup title="Profile">
                            <MenuItem>
                              <Link to="/Profile">My Account</Link>
                            </MenuItem>
                            <MenuItem>
                              <Link>Payments</Link>{' '}
                            </MenuItem>
                          </MenuGroup>
                          <MenuDivider />
                          <MenuGroup title="Help">
                            <MenuItem>Docs</MenuItem>
                            <MenuItem>FAQ</MenuItem>
                          </MenuGroup>
                        </MenuList>
                      </Menu>
                    </>
                  ) : (
                    <></>
                  )}
                </Link>
              </li>

              <li>
                <Link
                  to="/"
                  className=" block py-2 pl-3 pr-4 text-white text-md bg-blue-700 rounded md:bg-transparent md:text-violet-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className=" text-md block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/allProducts"
                  className="text-md block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Shop
                </Link>
              </li>

              {isAuthenticated == true ? (
                <a href="/ShoppingCar">
                  <IconButton colorScheme="purple">
                    <MdShoppingCart color="white" />
                  </IconButton>
                </a>
              ) : (
                <></>
              )}

              {isAuthenticated == false ? (
                <>
                  <li>
                    <Link
                      className="m-1 text-purple-800 font-bold text-lg"
                      to="/login"
                    >
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="m-1 rounded-xl bg-purple-900 px-3 py-2  font-medium text-white transition duration-200 hover:bg-purple-600 active:bg-purple-700 dark:bg-purple-400 dark:text-white dark:hover:bg-purple-300 dark:active:bg-purple-200"
                      to="/register"
                    >
                      Sign Up
                    </Link>
                  </li>
                </>
              ) : (
                <li>
                  <Link
                    onClick={() => Logout()}
                    className="m-1 text-purple-800 font-bold text-lg"
                  >
                    Logout
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
      {open == true ? (
        <AnimatePresence>
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={variants}
            style={{
              position: 'fixed',
              zIndex: 2,
              top: 0,
              left: 0,
              width: '30%',
              height: '100%',
              background: 'white',
            }}
          >
            {isAuthenticated == false ? (
              <SideBar />
            ) : (
              <AdminSideBar name={user.name} />
            )}
          </motion.div>
        </AnimatePresence>
      ) : (
        <></>
      )}
    </>
  );
};
