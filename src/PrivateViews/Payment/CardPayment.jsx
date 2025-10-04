import { Input, Button, Select } from '@chakra-ui/react';
import { FaLock, FaCreditCard } from 'react-icons/fa'; // Iconos para seguridad y claridad
import Mastercard from '/img/mastercard.png';
import Visa from '/img/visa.png';
import Binance from '/img/Binance-pay.jpg';
import American from '/img/american-express.png';

// Helper para determinar el tipo de tarjeta (Mejorado)
const getCardType = (number) => {
  if (!number) return null;
  // Expresiones regulares simplificadas para los tipos más comunes
  if (number.match(/^4/)) return '/img/visa.png';
  if (number.match(/^(5[1-5]|222[1-9]|22[3-9]|2[3-6]\d|27[0-1]|2720)/))
    return '/img/mastercard.png';
  if (number.match(/^3[47]/)) return '/img/american-express.png';
  return null;
};

// Formulario de Tarjeta de Crédito (Mejorado en UX)
export const CardPaymentForm = ({ cardNumber, setCardNumber, handlePay }) => {
  const cardLogo = getCardType(cardNumber);

  // Helper para agrupar visualmente la entrada de la tarjeta
  const formatCardNumber = (value) => {
    // Inserta un espacio cada 4 dígitos (UX clave)
    return value
      .replace(/\s?/g, '')
      .replace(/(\d{4})/g, '$1 ')
      .trim();
  };

  return (
    <div className="flex flex-col w-full px-4 sm:w-full max-w-lg">
      {/* Etiqueta y Título de Sección */}
      <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
        <FaCreditCard className="mr-2 text-purple-600" /> Detalles de la Tarjeta
      </h3>

      {/* 1. Número de Tarjeta (UX con Logo) */}
      <div className="relative mb-4">
        <Input
          variant="filled"
          maxLength={19} // 16 dígitos + 3 espacios
          placeholder="Número de Tarjeta (xxxx xxxx xxxx xxxx)"
          focusBorderColor="purple.500"
          type="tel" // Usa 'tel' para activar el teclado numérico en móvil (UX)
          value={formatCardNumber(cardNumber)}
          onChange={(e) => setCardNumber(e.target.value.replace(/\s/g, ''))} // Almacena sin espacios
        />
        {/* Logo de Tarjeta (feedback visual) */}
        {cardLogo && (
          <img
            className="w-10 absolute right-3 top-1/2 transform -translate-y-1/2"
            src={cardLogo}
            alt="Tipo de tarjeta"
          />
        )}
      </div>

      {/* 2. Expiración y CVC (Agrupados en la misma línea) */}
      <div className="flex space-x-4 mb-4">
        <Input
          variant="filled"
          placeholder="MM/YY"
          maxLength={5}
          focusBorderColor="purple.500"
          type="text"
          className="flex-1"
        />
        <Input
          variant="filled"
          maxLength={4} // Acepta 4 dígitos para Amex
          placeholder="CVC/CVV"
          focusBorderColor="purple.500"
          type="tel" // Usa 'tel' para teclado numérico
          className="flex-1"
        />
      </div>

      {/* 3. Nombre en la Tarjeta */}
      <Input
        variant="filled"
        mb={4}
        placeholder="Nombre en la Tarjeta"
        focusBorderColor="purple.500"
        type="text"
      />

      {/* 4. Dirección de Facturación (Mejorado el placeholder) */}
      <Input
        variant="filled"
        mb={6}
        placeholder="Dirección de Facturación"
        focusBorderColor="purple.500"
        type="text"
      />

      {/* Botón de Pago (CTA principal morado) */}
      <Button
        onClick={handlePay}
        leftIcon={<FaLock />} // Icono de seguridad para generar confianza (UX)
        colorScheme="purple"
        size="lg" // Botón más grande para mejor tactilidad
        borderRadius="lg"
        className="w-full font-bold"
      >
        Pagar Ahora
      </Button>

      {/* Logos de Opciones de Pago (Prueba social) */}
      <div className="w-full mt-6 gap-4 flex justify-center items-center opacity-70">
        <img
          className="w-10 h-6 object-contain"
          src={Mastercard}
          alt="Mastercard"
        />
        <img className="w-10 h-6 object-contain" src={Visa} alt="Visa" />
        <img
          className="w-10 h-6 object-contain"
          src={American}
          alt="American Express"
        />
        <img
          className="w-10 h-6 object-contain"
          src={Binance}
          alt="Binance Pay"
        />
      </div>
    </div>
  );
};
