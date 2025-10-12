import { assets } from '../../assets/assets';

export const HeroSection = () => {
  return (
    // Sección principal con padding generoso para 'aire' alrededor
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-32">
      {/* Estructura de la cuadrícula: 1 columna en móvil, 2 columnas desde 'md' */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Columna de Contenido (Texto y Botones) - Ordenar primero en móvil */}
        <div className="order-2 md:order-1 flex flex-col justify-center text-center md:text-left">
          {/* Título: Usa color morado para destacar, tamaño grande y peso de fuente audaz */}
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-gray-900">
            Enjoy <span className="text-purple-600">Shopping</span>
            with <br className="hidden sm:inline" /> Premium Offers
          </h1>

          {/* Párrafo: Texto con buena legibilidad (contraste), espaciado mejorado */}
          <p className="mb-10 text-lg sm:text-xl text-gray-600 leading-relaxed lg:w-4/5">
            Say goodbye to endless hours spent on building templates from
            scratch. Experience the quickest, most responsive, and trendiest
            dashboard solution available. Seriously.
          </p>

          {/* Contenedor de Botones: Mejor UX con espaciado y alineación */}
          <div className="flex flex-col items-center gap-4 sm:flex-row md:justify-start justify-center">
            {/* Botón Principal (UX: Acción principal con alto contraste) */}
            <button
              className="w-full sm:w-auto px-8 py-3 text-lg font-semibold text-white bg-purple-600 
                         hover:bg-purple-700 rounded-xl shadow-lg transition duration-300 
                         focus:outline-none focus:ring-4 focus:ring-purple-300"
            >
              Get started now
            </button>

            {/* Botón Secundario (UX: Menor énfasis con estilo 'outline') */}
            <button
              className="w-full sm:w-auto px-8 py-3 text-lg font-semibold text-purple-600 
                         bg-white border-2 border-purple-600 hover:bg-purple-50 rounded-xl 
                         transition duration-300 focus:outline-none focus:ring-4 focus:ring-purple-300"
            >
              Show Now !
            </button>
          </div>
        </div>

        {/* Columna de Imagen - Ordenar segundo en móvil, primero en escritorio */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          {/* Imagen: Sombra sutil y un 'aspect-ratio' definido para evitar saltos de layout */}
          <img
            className="w-full max-w-xl h-auto rounded-3xl object-cover 
                       aspect-video md:aspect-square transform transition duration-500 hover:scale-[1.01]"
            src={assets.Hero}
            alt="Shopping Illustration"
          />
        </div>
      </div>
    </section>
  );
};
