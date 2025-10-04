import {
  useContext,
  createContext,
  useState,
  useEffect,
  useCallback,
} from 'react';
import { getProduct, deleteItem, addShoppinCar } from '../api/shoppingCar.jsx';
import { useToast } from '@chakra-ui/react';

// 1. Creación del Contexto
const CarContext = createContext();

// 2. Custom Hook para el Consumo
export const UseShopCar = () => {
  const context = useContext(CarContext);

  if (!context) {
    throw new Error('UseShopCar must be used within a ShopCarProvider');
  }

  return context;
};

// 3. Proveedor del Contexto
// eslint-disable-next-line react/prop-types
export const ShopCarProvider = ({ children }) => {
  const [allProduct, setAllProduct] = useState([]);
  const [loading, setLoading] = useState(true); // Se añade estado de carga
  const toast = useToast();

  // Función para obtener los productos del carrito (usando useCallback para eficiencia)
  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await getProduct();
      setAllProduct(data);
    } catch (error) {
      console.error('Error al obtener productos del carrito:', error);
      toast({
        title: 'Error de Conexión',
        description: 'No se pudieron cargar los productos del carrito.',
        status: 'error',
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  }, [toast]);

  // CORRECCIÓN CRÍTICA:
  // EL BUCLE INFINITO estaba en: useEffect(() => { ... }, [allProduct]);
  // `allProduct` cambia en cada render, lo que fuerza a `useEffect` a volver a ejecutarse
  // La dependencia debe ser `fetchProducts` (definida con `useCallback`)
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // Cálculo de Precio Total
  const totalPrice = () => {
    // Se añade un check para evitar errores si allProduct no es un array
    if (!Array.isArray(allProduct)) return '0.00';

    const total = allProduct
      .map(({ price }) => price || 0) // Se asegura que price exista o sea 0
      .reduce((acc, val) => acc + val, 0);

    return total.toFixed(2);
  };

  // Agregar Producto al Carrito
  const AddProduct = async (newProduct) => {
    try {
      await addShoppinCar(newProduct);

      // 1. Mostrar Toast
      toast({
        title: `Producto Agregado`,
        status: 'success',
        isClosable: true,
      });

      // 2. ACTUALIZAR la lista de productos
      // En lugar de volver a llamar a la API, la práctica más eficiente es
      // agregar el producto localmente si la API lo permite, o hacer un re-fetch.
      // Aquí usamos re-fetch para asegurar que el servidor es la fuente de verdad:
      await fetchProducts();
    } catch (err) {
      console.error('Producto no pudo ser agregado:', err);
      toast({
        title: 'Error al agregar',
        description: 'No se pudo añadir el producto al carrito.',
        status: 'error',
        isClosable: true,
      });
    }
  };

  // Eliminar Producto del Carrito
  const deleteProduct = async (id) => {
    try {
      await deleteItem(id);

      // 1. Mostrar Toast
      toast({
        title: `Producto Eliminado`,
        status: 'error',
        isClosable: true,
      });

      // 2. ACTUALIZAR la lista de productos
      // Filtramos localmente para una actualización rápida (optimista)
      setAllProduct((prevProducts) => prevProducts.filter((p) => p.id !== id));

      // Si la optimización local no funciona, se podría llamar a fetchProducts()
      // para una actualización completa desde el servidor.
    } catch (error) {
      console.error('Error al eliminar producto:', error);
      toast({
        title: 'Error al eliminar',
        description: 'No se pudo eliminar el producto del carrito.',
        status: 'error',
        isClosable: true,
      });
    }
  };

  return (
    <CarContext.Provider
      value={{
        AddProduct,
        allProduct,
        deleteProduct,
        totalPrice,
        loading, // Se añade el estado de carga
        fetchProducts, // Se expone la función si se necesita refrescar el carrito manualmente
      }}
    >
      {children}
    </CarContext.Provider>
  );
};
