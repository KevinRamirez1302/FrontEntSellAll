import { assets } from '../../assets/assets';
import { FaBolt, FaMagic } from 'react-icons/fa';

export const AboutUs = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 font-sans">
      {/* Contenedor de dos columnas con espaciado 'gap' consistente */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Columna de Imagen (UX: poner la imagen al final en móvil para que el texto se lea primero) */}
        <div className="order-2 md:order-1 flex justify-center">
          <img
            className="w-full max-w-md md:max-w-lg h-auto rounded-3xl shadow-2xl object-cover 
                       aspect-square transform transition duration-500 hover:scale-[1.01]"
            src={assets.Comercio}
            alt="Ilustración de comercio electrónico o equipo"
          />
        </div>

        {/* Columna de Contenido (Texto y Características) */}
        <div className="order-1 md:order-2 flex flex-col justify-center text-center md:text-left">
          {/* Título y Subtítulo */}
          <h2 className="text-sm font-semibold uppercase tracking-widest text-purple-600 mb-3">
            Nuestra Historia
          </h2>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
            Conoce a nuestro equipo{' '}
            <span className="text-purple-700">Innovador</span>
          </h1>

          {/* Párrafo Principal (Mejor Legibilidad) */}
          <p className="mb-10 text-base lg:text-lg text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            necessitatibus numquam quod, minima libero esse doloribus enim error
            quas earum vero, ad vitae odio provident, quo quibusdam corrupti in
            ea!
          </p>

          {/* Contenedor de Características (UX: Agrupar en una cuadrícula pequeña) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6">
            {/* Característica 1: Versatil brand */}
            <div className="text-left">
              <div className="flex items-center mb-2 justify-center md:justify-start">
                {/* Icono más descriptivo para 'Versátil' */}
                <FaMagic size={26} className="text-purple-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">
                  Marca Versátil
                </h3>
              </div>
              <p className="text-gray-500 text-sm pl-0 md:pl-9">
                We are crafting a digital method that subsists life across all
                mediums.
              </p>
            </div>

            {/* Característica 2: Digital brand */}
            <div className="text-left">
              <div className="flex items-center mb-2 justify-center md:justify-start">
                {/* Icono más descriptivo para 'Digital/Innovación' */}
                <FaBolt size={26} className="text-purple-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">
                  Marca Digital
                </h3>
              </div>
              <p className="text-gray-500 text-sm pl-0 md:pl-9">
                We believe in innovation by merging primary with elaborate
                ideas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
