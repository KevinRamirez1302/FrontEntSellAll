import { useState, useEffect } from 'react';
import { Select, Stack } from '@chakra-ui/react';
import { FaBoxes } from 'react-icons/fa'; // Icono para el título
import instance from '../../../api/axios'; // Mantener tu importación de axios
import { Card } from '../CardProduct/Card'; // Mantener tu importación de Card

// Simulación de instancia y Card para que el código sea funcional en este contexto

export const AllProducts = () => {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // Lógica de carga corregida: se ejecuta solo cuando 'category' cambia
  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const url =
          category === '' || category === 'all'
            ? 'allProducts'
            : `allProducts/category/${category}`;

        // Usar instance de axios para la llamada
        const response = await instance.get(url);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
        setData([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [category]); // Ejecutar cada vez que la categoría cambie

  // --- Renderizado del componente ---
  return (
    <section className="bg-white py-16 md:py-24 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 1. Encabezado y Filtros (Sticky para mejor UX) */}
        <div className="sticky top-0 z-10 bg-white/90 backdrop-blur-md pb-8 mb-8 border-b border-gray-100">
          {/* Título y Subtítulo */}
          <div className="text-center mb-6">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-2 flex items-center justify-center">
              <FaBoxes className="mr-3 text-purple-600" /> Explorar Productos
            </h2>
            <p className="text-lg text-gray-500">
              Encuentra lo que necesitas filtrando por categorías.
            </p>
          </div>

          {/* Selector de Categoría (Moderno con color de marca) */}
          <div className="flex justify-center">
            <Stack width={{ base: 'full', sm: 'md' }}>
              <Select
                placeholder="Selecciona una Categoría"
                size="lg"
                focusBorderColor="purple.500"
                variant="outline"
                className="shadow-sm border-gray-300"
                // El onChange se aplica directamente aquí, no en la <section>
                onChange={(e) => setCategory(e.target.value)}
                value={category} // Controlar el valor del select
              >
                <option value="all">Todas las categorías</option>
                <option value="short">Shorts</option>
                <option value="phone">Teléfonos</option>
                <option value="videogame">Videojuegos</option>
                <option value="shoes">Zapatos</option>
                <option value="men">Hombres</option>
                <option value="women">Mujeres</option>
              </Select>
            </Stack>
          </div>
        </div>

        {/* 2. Área de Contenido: Carga, Grid y Sin Datos */}
        {isLoading ? (
          // Estado de Carga Moderno
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-600"></div>
          </div>
        ) : data.length === 0 ? (
          // Mensaje "Sin Datos" Estilizado
          <div className="text-center py-16 lg:col-span-4 col-span-full">
            <div className="text-center py-16 bg-gray-50 border-2 border-dashed border-purple-200 rounded-xl">
              <div className="w-16 h-16 mx-auto mb-6 bg-purple-50 rounded-full flex items-center justify-center">
                <FaBoxes className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                No se encontraron productos
              </h3>
              <p className="text-gray-600">
                Prueba con otra categoría o restablece el filtro.
              </p>
            </div>
          </div>
        ) : (
          // Grid de Productos
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8">
            {data.map((product) => (
              <div
                key={product._id}
                className="transform transition-all duration-300 hover:scale-[1.03] shadow-md hover:shadow-xl rounded-xl overflow-hidden"
              >
                <Card
                  data={product}
                  id={product._id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  quantity={product.quantity}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
