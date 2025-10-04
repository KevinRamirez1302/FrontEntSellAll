import { Button } from '@chakra-ui/react';
// import { CarProduct } from '../PrivateViews/shoppinComponents/carProduct.jsx';
import { UseShopCar } from '../../context/ShoppingContext.jsx';
import { Link } from 'react-router-dom';
import { FaTrashCan } from 'react-icons/fa6';
import { FaShoppingCart, FaCreditCard, FaLock } from 'react-icons/fa'; // Iconos

import Mastercard from '/img/mastercard.png';
import Visa from '/img/visa.png';
import Binance from '/img/Binance-pay.jpg';
import American from '/img/american-express.png';
import paypal from '/img/paypal.png';

export const CarSection = () => {
  const { allProduct, totalPrice, deleteProduct } = UseShopCar();

  // Constantes de precios
  const shippingCost = 1.99;

  // NOTA: Se convierte el resultado de totalPrice() a un número flotante (parseFloat) para asegurar la suma.
  const subTotal = parseFloat(totalPrice() || 0);

  // Cálculo del total sin toFixed(). Usamos Math.round para evitar números largos, si es necesario.
  // Pero la forma más segura es simplemente sumarlos.
  const total = subTotal > 0 ? subTotal + shippingCost : 0;

  // Helper simple para mostrar valores limpios, si no se necesita redondeo específico.
  const displayValue = (amount) => Math.round(amount * 100) / 100;
  // La función anterior simula la precisión sin usar toFixed, evitando el error de prototipo.

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-20 bg-gray-50 min-h-screen">
      {/* Título de la Sección */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 md:mb-12 flex items-center">
        <FaShoppingCart className="mr-3 text-purple-600" /> Tu Carrito de
        Compras
      </h1>

      {/* Layout de dos columnas (responsive y sticky) */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Columna 1: Lista de Productos */}
        <div className="w-full lg:w-7/12 space-y-6">
          {allProduct.length === 0 ? (
            <div className="p-8 text-center bg-white rounded-xl shadow-lg border border-purple-200">
              <p className="text-xl text-gray-600">
                Tu carrito está vacío. ¡Añade algunos productos!
              </p>
              <Link
                to="/"
                className="mt-4 inline-block text-purple-600 font-semibold hover:text-purple-700"
              >
                Ir a la Tienda
              </Link>
            </div>
          ) : (
            allProduct.map(({ name, image, _id, price, quantity }) => (
              <div
                key={_id}
                className="bg-white p-4 rounded-xl flex justify-center gap-2 items-center shadow-md border border-gray-100 transition duration-300 hover:shadow-lg"
              >
                <img className="w-20" src={image} alt="" />
                <p className="font-semibold text-gray-800">{name}</p>
                <p className="text-sm text-purple-600">{`Precio por unidad: ${displayValue(
                  price
                )} | Cantidad: ${quantity}$`}</p>
                <p className="text-sm text-gray-500">{`Subtotal del producto: ${displayValue(
                  price * quantity
                )}`}</p>
                <button
                  onClick={() => deleteProduct(_id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FaTrashCan />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Columna 2: Resumen y Checkout (Sticky) */}
        <div className="w-full lg:w-5/12 lg:sticky lg:top-8 h-fit space-y-6">
          {/* Bloque de Resumen del Pedido (Estilo Premium Morado) */}
          <div className="bg-white p-6 rounded-xl shadow-2xl border-t-4 border-purple-600">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-6 border-b pb-3">
              Resumen del Pedido
            </h2>

            {/* Detalles de Precio */}
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-gray-700">
                <p>
                  Subtotal ({allProduct.length}{' '}
                  {allProduct.length === 1 ? 'ítem' : 'ítems'}):
                </p>
                <p className="font-medium">{displayValue(subTotal) + '$'}</p>
              </div>
              <div className="flex justify-between text-gray-700">
                <p>Envío (Standard):</p>
                <p className="font-medium">
                  {displayValue(shippingCost) + '$'}
                </p>
              </div>
            </div>

            {/* Total Final */}
            <div className="flex justify-between pt-4 border-t-2 border-purple-100">
              <p className="text-xl font-bold text-gray-900">Total:</p>
              <p className="text-2xl font-extrabold text-purple-700">
                {displayValue(total) + '$'}
              </p>
            </div>
          </div>

          <Button
            className="w-full text-white font-bold"
            colorScheme="purple"
            size="lg"
            borderRadius="lg"
            isDisabled={allProduct.length === 0}
          >
            <Link
              to="Payment"
              className="flex items-center justify-center w-full"
            >
              <FaLock className="mr-2" />
              {allProduct.length === 0 ? 'Añade productos' : 'PROCEDER AL PAGO'}
            </Link>
          </Button>

          {/* Bloque de Métodos de Pago */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center justify-center">
              <FaCreditCard className="mr-2 text-purple-600" /> Métodos de Pago
              Seguros
            </h2>
            <div className="w-full flex flex-wrap justify-center items-center gap-4 opacity-80">
              <img
                className="h-6 w-auto object-contain"
                src={Mastercard}
                alt="Mastercard"
              />
              <img
                className="h-6 w-auto object-contain"
                src={Visa}
                alt="Visa"
              />
              <img
                className="h-6 w-auto object-contain"
                src={American}
                alt="American Express"
              />
              <img
                className="h-6 w-auto object-contain"
                src={paypal}
                alt="PayPal"
              />
              <img
                className="h-6 w-auto object-contain"
                src={Binance}
                alt="Binance Pay"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
