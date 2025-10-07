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
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // Cálculo de Precio Total
  const totalPrice = () => {
    if (!Array.isArray(allProduct)) return '0.00';

    const total = allProduct
      .map(({ price }) => price || 0)
      .reduce((acc, val) => acc + val, 0);

    return total.toFixed(2);
  };

  // Agregar Producto al Carrito
  const AddProduct = async (newProduct) => {
    try {
      await addShoppinCar(newProduct);

      toast({
        title: `Producto Agregado`,
        status: 'success',
        isClosable: true,
      });

      // 2. ACTUALIZAR la lista de productos
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
      const res = await deleteItem(id);

      toast({
        title: `Producto Eliminado`,
        status: 'success',
        isClosable: true,
      });

      await fetchProducts();

      console.log('deleteItem response:', res && res.status ? res.status : res);
    } catch (error) {
      console.error('Error al eliminar producto:', error);

      if (error?.response?.status === 401) {
        toast({
          title: 'No autorizado',
          description: 'Tu sesión no está autorizada para eliminar este item.',
          status: 'warning',
          isClosable: true,
        });
      } else {
        toast({
          title: 'Error al eliminar',
          description: 'No se pudo eliminar el producto del carrito.',
          status: 'error',
          isClosable: true,
        });
      }
    }
  };

  return (
    <CarContext.Provider
      value={{
        AddProduct,
        allProduct,
        deleteProduct,
        totalPrice,
        loading,
        fetchProducts,
      }}
    >
      {children}
    </CarContext.Provider>
  );
};
