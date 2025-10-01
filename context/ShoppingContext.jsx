import { useContext, createContext, useState, useEffect } from 'react'
import { getProduct, deleteItem, addShoppinCar } from '../api/shoppingCar.jsx'
import { useRef } from 'react'
import { useToast } from '@chakra-ui/react'

const CarContext = createContext()

export const UseShopCar = () => {
  const context = useContext(CarContext)

  if (!context) {
    throw new Error('UseShopCar must be used within a CarShopProvider')
  }

  return context
}

// eslint-disable-next-line react/prop-types
export const ShopCarProvider = ({ children }) => {
  const [allProduct, setAllProduct] = useState([])
  const toast = useToast()
  const toastIdRef = useRef()

  function addToast() {
    toastIdRef.current = toast({
      title: `Producto Agregado`,
      status: 'success',
      isClosable: true
    })
  }
  useEffect(() => {
    getProduct().then((data) => setAllProduct(data.data))
  }, [allProduct])

  const totalPrice = () => {
    const total = allProduct
      .map(({ price }) => price)
      .reduce((acc, val) => acc + val, 0)
    return total.toFixed(2)
  }

  const AddProduct = async (newProduct) => {
    try {
      await addShoppinCar(newProduct)
      addToast()
    } catch (err) {
      console.log('Producto no pudo ser agregado')
    }
  }

  const deleteProduct = async (id) => {
    await deleteItem(id)
    toast({
      title: `Eliminado`,
      status: 'error',
      isClosable: true
    })
  }

  return (
    <CarContext.Provider
      value={{ AddProduct, allProduct, deleteProduct, totalPrice }}
    >
      {children}
    </CarContext.Provider>
  )
}
