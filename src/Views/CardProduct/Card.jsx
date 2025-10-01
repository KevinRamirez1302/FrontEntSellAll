import { MdOutlineShoppingCart, MdFavoriteBorder } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { UseShopCar } from '../../../context/ShoppingContext';
import { UseAuth } from '../../../context/AuthContext';
import { useState } from 'react';

export const Card = (props) => {
  const { AddProduct } = UseShopCar();
  const { isAuthenticated } = UseAuth();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleAddClick = () => {
    AddProduct(props.data);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  return (
    <div className="group relative w-full max-w-xs mx-auto flex flex-col bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-1 overflow-hidden border border-gray-100">
      {/* Badge y botón favorito */}
      <div className="absolute top-3 left-3 right-3 z-10 flex justify-between items-start">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Nuevo
        </div>
        <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110">
          <MdFavoriteBorder className="w-4 h-4 text-gray-600" />
        </button>
      </div>

      {/* Imagen del producto */}
      <Link to={`/products/${props.id}`} className="block">
        <div className="relative aspect-square overflow-hidden bg-gray-50">
          {!imageLoaded && !imageError && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-spin rounded-full h-6 w-6 border-2 border-purple-600 border-t-transparent"></div>
            </div>
          )}

          {imageError ? (
            <div className="w-full h-full flex items-center justify-center bg-gray-100">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-2 bg-gray-300 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <p className="text-xs text-gray-400">Sin imagen</p>
              </div>
            </div>
          ) : (
            <img
              className={`w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-110 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              src={props.image}
              alt={props.name}
              onLoad={() => setImageLoaded(true)}
              onError={handleImageError}
            />
          )}

          {/* Overlay gradiente */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </Link>

      {/* Contenido de la card */}
      <div className="flex flex-col flex-grow p-4 space-y-3">
        {/* Nombre del producto */}
        <Link to={`/products/${props.id}`}>
          <h3 className="font-semibold text-gray-900 text-sm leading-tight line-clamp-2 group-hover:text-purple-700 transition-colors duration-200 min-h-[2.5rem] flex items-center">
            {props.name}
          </h3>
        </Link>

        {/* Precio */}
        <div className="flex items-center justify-center">
          <span className="text-xl font-bold text-gray-900 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            $
            {typeof props.price === 'number'
              ? props.price.toFixed(2)
              : props.price}
          </span>
        </div>

        {/* Rating opcional */}
        <div className="flex items-center justify-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className="w-3 h-3 fill-yellow-400"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          ))}
          <span className="text-xs text-gray-500 ml-1">(4.8)</span>
        </div>

        {/* Botón de añadir al carrito */}
        {isAuthenticated && (
          <button
            onClick={handleAddClick}
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-medium py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl mt-auto group/button"
          >
            <MdOutlineShoppingCart className="w-5 h-5 group-hover/button:animate-bounce" />
            <span className="text-sm">Añadir</span>
          </button>
        )}

        {/* Botón para usuarios no autenticados */}
        {!isAuthenticated && (
          <Link
            to="/login"
            className="w-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-4 rounded-xl transition-all duration-300 border border-gray-200 hover:border-gray-300 mt-auto"
          >
            <span className="text-sm">Ver Producto</span>
          </Link>
        )}
      </div>

      {/* Indicador de disponibilidad */}
      <div className="absolute bottom-0 left-0 right-0 h-1">
        <div className="h-full bg-gradient-to-r from-green-400 to-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
      </div>
    </div>
  );
};
