import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    quote:
      'La mejor experiencia de compra online que he tenido. El envío fue rapidísimo y la calidad de los productos superó mis expectativas. ¡Definitivamente mi nueva tienda favorita!',
    name: 'Ana S.',
    title: 'Compradora recurrente',
    avatar: 'https://i.pravatar.cc/150?img=1',
    rating: 5,
  },
  {
    quote:
      'Siempre encuentro las últimas tendencias en SellAll. El diseño de su web es muy intuitivo (gran UX). ¡Totalmente recomendable para cualquier amante de la moda!',
    name: 'Javier M.',
    title: 'Cliente entusiasta',
    avatar: 'https://i.pravatar.cc/150?img=68',
    rating: 5,
  },
  {
    quote:
      'Buscaba un producto específico y lo encontré aquí al mejor precio. El proceso de pago fue sencillo y seguro. ¡Sigan así con el excelente servicio al cliente!',
    name: 'Laura G.',
    title: 'Primera vez',
    avatar: 'https://i.pravatar.cc/150?img=35',
    rating: 4,
  },
];

const StarRating = ({ count }) => (
  <div className="flex justify-center md:justify-start mb-4">
    {[...Array(5)].map((_, index) => (
      <FaStar
        key={index}
        // Aplica el color morado a las estrellas llenas
        className={index < count ? 'text-purple-500' : 'text-gray-300'}
        size={16}
      />
    ))}
  </div>
);

export const TestimonialsSection = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-white">
      {/* Encabezado de la Sección */}
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-purple-600 mb-2">
          Opiniones Reales
        </h2>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
          Lo que nuestros <span className="text-purple-700">clientes</span>{' '}
          dicen
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg ring-1 ring-purple-100 
             transition duration-300 transform hover:shadow-xl hover:scale-[1.02] 
             flex flex-col h-full text-center md:text-left relative overflow-hidden "
          >
            <p className="text-gray-700 font-medium mb-6 leading-relaxed flex-grow z-10">
              "{testimonial.quote}"
            </p>

            <div className="mt-4 pt-4 border-t border-gray-100">
              {' '}
              <StarRating count={testimonial.rating} />
              <div className="flex items-center justify-center md:justify-start">
                <img
                  className="w-14 h-14 rounded-full mr-4 border-3 border-purple-400 p-0.5 shadow-md"
                  src={testimonial.avatar}
                  alt={`Avatar de ${testimonial.name}`}
                />
                <div>
                  <p className="font-extrabold text-xl text-gray-900 leading-tight">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-purple-600 font-medium">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
