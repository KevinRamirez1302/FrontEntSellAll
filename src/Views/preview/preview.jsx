import { UseShopCar } from '../../../context/ShoppingContext';
import UseProduct from './usepreview';
import { FaShoppingCart, FaHeart } from 'react-icons/fa'; // Iconos modernos

export const ProductPreview = () => {
  const { AddProduct } = UseShopCar();
  const { product, isLoading, error } = UseProduct();

  // --- Estados de Carga y Error mejorados ---
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20 bg-red-50 text-red-700 rounded-lg mx-auto max-w-lg">
        Error al cargar el producto: {error}
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center py-20 text-gray-500">
        No hay datos de producto disponibles.
      </div>
    );
  }
  // ------------------------------------------

  return (
    <section className="bg-white py-12 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Contenedor principal: Dos columnas en escritorio */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 xl:gap-20 flex flex-wrap">
          {/* Columna 1: Imagen del Producto (Más grande y con mejor estilo) */}
          <div className="w-full mb-10 lg:mb-0 lg:sticky lg:top-10 lg:h-fit">
            <img
              alt={product.name}
              // Diseño Moderno: Bordes redondeados y sombra
              className="w-full h-auto object-cover object-center rounded-3xl shadow-xl transition duration-500 hover:shadow-2xl"
              src={product.image}
            />
          </div>

          {/* Columna 2: Detalles del Producto */}
          <div className="w-full lg:w-full lg:pl-0">
            {/* Marca y Título */}
            <h2 className="text-sm font-semibold uppercase tracking-widest text-purple-600 mb-2">
              Sell All
            </h2>
            <h1 className="text-gray-900 text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
              {product.name}
            </h1>

            {/* Precio y Rating (Agrupados) */}
            <div className="flex items-center mb-6 border-b border-gray-200 pb-6">
              <span className="title-font font-extrabold text-3xl text-purple-700 mr-4">
                ${product.price}
              </span>

              {/* Asume que product.rating existe */}
              {product.rating && (
                <div className="flex items-center">
                  {/* Se usó un componente StarRating para consistencia */}
                  <span className="ml-3 text-gray-500 text-sm">
                    ({product.reviews || '0'} reseñas)
                  </span>
                </div>
              )}
            </div>

            {/* Descripción */}
            <p className="leading-relaxed text-gray-600 mb-8">
              {product.description}
            </p>

            {/* Selectores de Opciones (Color y Cantidad) */}
            <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-8 pb-5 border-b border-gray-200 mb-8">
              {/* Selector de Color (Mejorado con Borde de Enfoque Morado) */}
              <div className="flex items-center">
                <span className="mr-3 font-semibold text-gray-800">Color:</span>
                {/* Asume product.colors es un array de strings de color */}
                {(product.colors || ['#000', '#777', '#f00']).map(
                  (color, idx) => (
                    <button
                      key={idx}
                      style={{ backgroundColor: color }}
                      // Borde de selección morado
                      className={`border-2 ml-1 w-7 h-7 rounded-full focus:outline-none 
                                ${
                                  idx === 0
                                    ? 'border-purple-600 ring-2 ring-purple-300 p-0.5'
                                    : 'border-gray-300'
                                }`}
                      aria-label={`Seleccionar color ${color}`}
                    ></button>
                  )
                )}
              </div>
            </div>

            {/* Acciones (CTA) */}
            <div className="flex space-x-4">
              {/* Botón Añadir al Carrito (CTA Principal Morado) */}
              <button
                onClick={() => AddProduct(product)}
                className="flex-1 sm:flex-auto flex justify-center items-center text-white bg-purple-600 
                           border-0 py-3 px-8 font-semibold text-lg rounded-xl shadow-lg 
                           hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-300 transition duration-300"
              >
                <FaShoppingCart className="mr-2" /> Añadir al Carrito
              </button>

              {/* Botón de Lista de Deseos (CTA Secundario Morado Claro) */}
              <button
                className="w-14 h-14 rounded-xl border border-gray-300 flex items-center justify-center text-purple-600 
                           hover:bg-purple-50 transition duration-300 focus:outline-none focus:ring-4 focus:ring-purple-300"
                aria-label="Añadir a lista de deseos"
              >
                <FaHeart size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
