import { Card } from '../CardProduct/Card.jsx';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { AboutuS } from '../aboutUs/aboutus.jsx';
import { HeroSection } from './heroSection.jsx';
import useProducts from './useProducts.jsx';

export const MainPage = () => {
  const { products, isLoading, error } = useProducts();

  // Configuración responsive mejorada
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1536 },
      items: 5,
      slidesToSlide: 1,
      partialVisibilityGutter: 20,
    },
    desktop: {
      breakpoint: { max: 1536, min: 1024 },
      items: 4,
      slidesToSlide: 1,
      partialVisibilityGutter: 15,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
      slidesToSlide: 1,
      partialVisibilityGutter: 10,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 30,
    },
  };

  // Componente de skeleton para loading
  const ProductSkeleton = () => (
    <div className="animate-pulse">
      <div className="bg-white rounded-2xl shadow-md p-4 mx-2">
        <div className="aspect-square bg-gray-300 rounded-xl mb-4"></div>
        <div className="space-y-3">
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
          <div className="h-6 bg-gray-300 rounded w-1/2"></div>
          <div className="h-10 bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
  );

  // Estado de loading mejorado
  const renderLoadingState = () => (
    <div className="relative bg-gradient-to-br from-violet-500 via-purple-600 to-indigo-700 shadow-2xl overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
      </div>

      {/* Header */}
      <div className="relative z-10 text-center py-8 px-4">
        <div className="animate-pulse">
          <div className="h-8 bg-white/20 rounded w-64 mx-auto mb-2"></div>
          <div className="h-4 bg-white/20 rounded w-48 mx-auto"></div>
        </div>
        <div className="w-24 h-1 bg-white/30 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Skeleton carousel */}
      <div className="relative z-10 px-4 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(4)].map((_, index) => (
              <ProductSkeleton key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // Estado de error mejorado
  const renderErrorState = () => (
    <div className="relative bg-gradient-to-br from-red-500 via-pink-600 to-rose-700 shadow-2xl overflow-hidden">
      <div className="relative z-10 text-center py-16 px-4">
        <div className="max-w-md mx-auto">
          {/* Icono de error */}
          <div className="w-20 h-20 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>

          <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-lg">
            Oops! Algo salió mal
          </h3>
          <p className="text-red-100 mb-6">
            No pudimos cargar los productos en este momento. Por favor,
            inténtalo de nuevo más tarde.
          </p>

          <button
            onClick={() => window.location.reload()}
            className="bg-white/20 hover:bg-white/30 text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-white/40"
          >
            Reintentar
          </button>
        </div>
      </div>
    </div>
  );

  // Estado vacío mejorado
  const renderEmptyState = () => (
    <div className="relative bg-gradient-to-br from-gray-500 via-slate-600 to-gray-700 shadow-2xl overflow-hidden">
      <div className="relative z-10 text-center py-16 px-4">
        <div className="max-w-md mx-auto">
          {/* Icono de producto vacío */}
          <div className="w-20 h-20 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              />
            </svg>
          </div>

          <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-lg">
            No hay productos disponibles
          </h3>
          <p className="text-gray-200">
            Parece que no tenemos productos para mostrar en este momento.
            ¡Vuelve pronto para ver nuestras novedades!
          </p>
        </div>
      </div>
    </div>
  );

  // Carousel de productos exitoso
  const renderSuccessState = () => (
    <div className="relative bg-gradient-to-br from-violet-500 via-purple-600 to-indigo-700 shadow-2xl overflow-hidden">
      {/* Patrón decorativo de fondo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,rgba(255,255,255,0.05)_25%,transparent_25%),linear-gradient(-45deg,rgba(255,255,255,0.05)_25%,transparent_25%)] bg-[length:20px_20px]"></div>
      </div>

      {/* Header del carousel */}
      <div className="relative z-10 text-center py-8 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg">
          Productos Destacados
        </h2>
        <p className="text-violet-100 text-lg">
          Descubre nuestra selección premium de {products.length} productos
        </p>
        <div className="w-24 h-1 bg-white/30 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Contenedor del carousel */}
      <div className="relative z-10 px-4 pb-8">
        <div className="max-w-7xl mx-auto">
          <Carousel
            autoPlay={true}
            autoPlaySpeed={3500}
            infinite={true}
            centerMode={false}
            responsive={responsive}
            ssr={true}
            swipeable={true}
            draggable={true}
            showDots={false}
            removeArrowOnDeviceType={['tablet', 'mobile']}
            itemClass="px-2 md:px-3"
            containerClass="overflow-visible"
            customTransition="transform 500ms ease-in-out"
            transitionDuration={500}
            customLeftArrow={
              <button className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-violet-600 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 backdrop-blur-sm">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            }
            customRightArrow={
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-violet-600 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 backdrop-blur-sm">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            }
          >
            {products.map((product) => (
              <div key={product._id} className="h-full flex items-stretch">
                <div className="w-full max-w-sm mx-auto">
                  <Card {...product} />
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      {/* Decoración inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-violet-400 via-purple-500 to-indigo-600"></div>
    </div>
  );

  // Función principal para renderizar el carousel
  const renderProductCarousel = () => {
    if (isLoading) return renderLoadingState();
    if (error) return renderErrorState();
    if (products.length === 0) return renderEmptyState();
    return renderSuccessState();
  };

  return (
    <main className="min-h-screen">
      <HeroSection />

      {/* Sección de productos con transición suave */}
      <section className="transition-all duration-500 ease-in-out">
        {renderProductCarousel()}
      </section>

      <AboutuS />
    </main>
  );
};
