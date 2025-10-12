import { FaHome, FaSearch } from 'react-icons/fa';
import { assets } from '../../assets/assets';

export const Notfound = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 py-12 md:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2 text-center md:text-left">
          {/* Código de Error (Destacado y Morado) */}
          <p className="text-6xl sm:text-7xl lg:text-8xl font-extrabold text-purple-600 mb-4">
            404
          </p>

          {/* Título Principal */}
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
            ¡Oops! Página No Encontrada
          </h1>

          {/* Descripción UX */}
          <h3 className="text-lg text-gray-600 mb-8">
            Lo sentimos, no pudimos encontrar la página que estás buscando.
            Parece que el enlace está roto o la página ha sido eliminada.
          </h3>

          {/* Botones de Acción (UX: Opciones claras para el usuario) */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            {/* CTA Principal: Volver a la Home (Morado) */}
            <a
              href="/" // En React, usaría <Link to="/">
              className="flex items-center justify-center py-3 px-6 text-lg font-semibold text-white bg-purple-600 
                         rounded-xl shadow-lg hover:bg-purple-700 transition duration-300 
                         focus:outline-none focus:ring-4 focus:ring-purple-300 w-full sm:w-auto"
            >
              <FaHome className="mr-2" /> Volver a la Tienda
            </a>

            {/* CTA Secundario: Búsqueda (Outline) */}
            <a
              href="/search" // O la ruta de tu página de búsqueda
              className="flex items-center justify-center py-3 px-6 text-lg font-semibold text-purple-600 
                         bg-white border-2 border-purple-600 rounded-xl hover:bg-purple-50 transition duration-300 
                         focus:outline-none focus:ring-4 focus:ring-purple-300 w-full sm:w-auto"
            >
              <FaSearch className="mr-2" /> Buscar Productos
            </a>
          </div>
        </div>

        {/* Columna de Ilustración (Imagen más moderna y con estilo) */}
        <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
          <img
            className="w-full max-w-sm md:max-w-md h-auto rounded-3xl  object-cover"
            // Recomiendo usar una ilustración moderna con el tema eCommerce/Búsqueda
            src={assets.NotFound}
            alt="Ilustración de página no encontrada"
          />
        </div>
      </div>
    </section>
  );
};
