import { Button, Stack, Select } from '@chakra-ui/react';
import { FaWallet } from 'react-icons/fa';
import { useState } from 'react';
import { CardPaymentForm } from './CardPayment';

export const Payment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [method, setMethod] = useState('Card');

  const handlePay = () => {
    console.log('Procesando pago con tarjeta:', cardNumber);
    // Lógica de validación y envío a la pasarela de pago
  };

  return (
    <section className="w-full flex items-center justify-center py-12 md:py-20 bg-gray-50">
      {/* Contenedor centralizado y con bordes redondeados */}
      <div className="w-full max-w-xl bg-white p-6 sm:p-10 rounded-xl shadow-2xl border-t-4 border-purple-500">
        <h2 className="text-center mb-6 text-3xl font-bold text-gray-900 flex items-center justify-center">
          <FaWallet className="mr-3 text-purple-600" /> Proceso de Pago
        </h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          {/* Selector de Método de Pago */}
          <Stack spacing={3} className="mb-8">
            <label className="font-semibold text-gray-700">
              Seleccionar Método de Pago:
            </label>
            <Select
              value={method}
              onChange={(e) => setMethod(e.target.value)}
              focusBorderColor="purple.500"
              size="lg" // Select más grande para mejor UX
            >
              <option value="Card">Tarjeta de Crédito/Débito</option>
              <option value="Binance">Binance Pay</option>
            </Select>
          </Stack>

          {/* Renderizado Condicional del Formulario */}
          {method === 'Card' ? (
            <CardPaymentForm
              cardNumber={cardNumber}
              setCardNumber={setCardNumber}
              handlePay={handlePay}
            />
          ) : method === 'Binance' ? (
            <div className="flex flex-col items-center p-8 bg-purple-50 rounded-lg border border-purple-200">
              <p className="text-gray-700 mb-4 font-medium">
                Serás redirigido a la pasarela de Binance Pay.
              </p>
              <Button
                colorScheme="purple"
                className="w-full sm:w-auto"
                size="lg"
                onClick={() => console.log('Redirigir a Binance')}
              >
                Continuar con Binance Pay
              </Button>
            </div>
          ) : null}
        </form>
      </div>
    </section>
  );
};
