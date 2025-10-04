import { useEffect, useCallback } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { UseAuth } from '../../../context/AuthContext';
import {
  IoCloseSharp,
  IoHomeOutline,
  IoInformationCircleOutline,
  IoStorefrontOutline,
  IoCartOutline,
  IoPersonOutline,
  IoLogOutOutline,
  IoLogInOutline,
  IoPersonAddOutline,
} from 'react-icons/io5';

export const SideBar = ({ onClose }) => {
  const { isAuthenticated, Logout } = UseAuth();
  const navigate = useNavigate();

  // Cerrar sidebar cuando la pantalla se hace más grande
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        onClose?.();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [onClose]);

  // Cerrar con tecla Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose?.();
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  // Prevenir scroll del body
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleLogout = useCallback(() => {
    Logout();
    onClose?.();
    navigate('/login');
  }, [Logout, onClose, navigate]);

  const handleBackdropClick = useCallback(
    (e) => {
      if (e.target === e.currentTarget) {
        onClose?.();
      }
    },
    [onClose]
  );

  // Configuración de items de navegación
  const navItems = [
    { to: '/', label: 'Home', icon: IoHomeOutline },
    { to: '/about', label: 'About', icon: IoInformationCircleOutline },
    { to: '/allProducts', label: 'Shop', icon: IoStorefrontOutline },
    { to: '/ShoppingCar', label: 'Cart', icon: IoCartOutline },
  ];

  if (isAuthenticated) {
    navItems.push({ to: '/profile', label: 'Profile', icon: IoPersonOutline });
  }

  return (
    <div
      className="fixed inset-0 z-[9999] md:hidden"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="sidebar-title"
    >
      {/* Backdrop mejorado con blur */}
      <div className=" transition-opacity duration-300" />

      {/* Sidebar con animación */}
      <aside className="absolute left-0 top-0 h-full w-[280px] bg-white shadow-2xl transform transition-transform duration-300 ease-out flex flex-col">
        {/* Header con logo mejorado */}
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <Link
            to="/"
            onClick={onClose}
            className="group"
            aria-label="Go to home"
          >
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:shadow-lg transition-shadow">
                S
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                SellAll
              </span>
            </div>
          </Link>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-all duration-200 active:scale-95"
            aria-label="Close sidebar"
            type="button"
          >
            <IoCloseSharp size={24} />
          </button>
        </div>

        {/* Navigation mejorada con iconos */}
        <nav className="flex-1 overflow-y-auto px-3 py-4" role="navigation">
          <div className="space-y-1">
            {navItems.map(({ to, label, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg shadow-purple-500/30'
                      : 'text-gray-700 hover:bg-purple-50 hover:text-purple-600'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <Icon
                      size={22}
                      className={
                        isActive
                          ? ''
                          : 'group-hover:scale-110 transition-transform'
                      }
                    />
                    <span
                      className={`font-medium ${
                        isActive ? 'font-semibold' : ''
                      }`}
                    >
                      {label}
                    </span>
                  </>
                )}
              </NavLink>
            ))}
          </div>
        </nav>

        {/* Footer con botones mejorados */}
        <div className="p-4 border-t border-gray-100 bg-gradient-to-b from-transparent to-gray-50/50">
          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="flex items-center justify-center space-x-2 w-full px-4 py-3 font-semibold text-white bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl hover:from-purple-700 hover:to-purple-800 transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
            >
              <IoLogOutOutline size={20} />
              <span>Logout</span>
            </button>
          ) : (
            <div className="space-y-2">
              <Link
                to="/login"
                onClick={onClose}
                className="flex items-center justify-center space-x-2 w-full px-4 py-3 font-semibold text-purple-600 border-2 border-purple-600 rounded-xl hover:bg-purple-50 transition-all duration-200 active:scale-95"
              >
                <IoLogInOutline size={20} />
                <span>Login</span>
              </Link>
              <Link
                to="/register"
                onClick={onClose}
                className="flex items-center justify-center space-x-2 w-full px-4 py-3 font-semibold text-white bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl hover:from-purple-700 hover:to-purple-800 transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
              >
                <IoPersonAddOutline size={20} />
                <span>Sign Up</span>
              </Link>
            </div>
          )}
        </div>
      </aside>
    </div>
  );
};
