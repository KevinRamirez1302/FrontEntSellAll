import empresa from '/img/empresa.jpg';

export const AboutSection = () => {
  return (
    // Sección minimalista: Fondo blanco simple y padding generoso
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-40 bg-white">
      {/* Contenedor de Asimetría (Minimalista: 2/3 para el texto, 1/3 para la imagen) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24 items-start">
        {/* Columna 1: Contenido (Texto) - Ocupa 2/3 del espacio */}
        <div className="lg:col-span-2 flex flex-col justify-center text-center md:text-left">
          {/* Subtítulo Sutil */}
          <h2 className="text-sm font-semibold uppercase tracking-widest text-purple-600 mb-3">
            Nuestra Filosofía
          </h2>

          {/* Título Principal (Enfoque en la tipografía) */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-8 leading-snug">
            La <span className="font-medium text-purple-700">calidad</span> es
            el motor de nuestro <span className="font-medium">e-commerce.</span>
          </h1>

          {/* Párrafo Principal (Fuente ligera para minimalismo) */}
          <p className="mt-4 text-lg text-gray-600 leading-relaxed font-light md:w-3/4">
            En SellAll, simplificamos el proceso de compra. Nuestro enfoque se
            centra en la **transparencia**, la **eficiencia** y un diseño que
            prioriza la comodidad del usuario por encima de todo. Menos es más,
            y eso se traduce en una mejor experiencia.
          </p>

          {/* Párrafo Secundario */}
          <p className="mt-4 text-lg text-gray-600 leading-relaxed font-light md:w-3/4">
            Buscamos la perfección en los detalles. No solo vendemos productos;
            ofrecemos una plataforma que es **intuitiva, rápida y agradable** de
            usar, sin distracciones innecesarias.
          </p>

          {/* Botón CTA Minimalista (Outline para no saturar) */}
          <div className="mt-10 flex justify-center md:justify-start">
            <a
              href="/about"
              className="flex items-center justify-center py-3 px-8 text-lg font-semibold text-purple-600 
                           border-2 border-purple-600 rounded-lg hover:bg-purple-50 transition duration-300 
                           focus:outline-none focus:ring-2 focus:ring-purple-300"
            >
              Descubre Nuestro Proceso
            </a>
          </div>
        </div>

        {/* Columna 2: Imagen (Derecha) - Ocupa 1/3 del espacio */}
        <div className="flex justify-center lg:justify-end order-first lg:order-none">
          <img
            // Estilo Minimalista: Sin sombras pesadas, bordes definidos, enfoque en la forma
            className="w-full max-w-xs h-auto object-cover object-center rounded-lg border-2 border-gray-100 
                       aspect-square transform transition duration-500 hover:border-purple-300"
            src={empresa}
            alt="Ilustración minimalista"
          />
        </div>
      </div>
    </section>
  );
};
