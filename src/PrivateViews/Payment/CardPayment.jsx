import { Input, Button } from '@chakra-ui/react';
import { FaLock, FaCreditCard } from 'react-icons/fa';
import { assets } from '../../assets/assets';

const getCardType = (number) => {
  if (!number) return null;
  if (number.match(/^4/)) return '/img/visa.png';
  if (number.match(/^(5[1-5]|222[1-9]|22[3-9]|2[3-6]\d|27[0-1]|2720)/))
    return '/img/mastercard.png';
  if (number.match(/^3[47]/)) return '/img/american-express.png';
  return null;
};

export const CardPaymentForm = ({ cardNumber, setCardNumber, handlePay }) => {
  const cardLogo = getCardType(cardNumber);

  const formatCardNumber = (value) => {
    return value
      .replace(/\s?/g, '')
      .replace(/(\d{4})/g, '$1 ')
      .trim();
  };

  return (
    <div className="flex flex-col w-full px-4 sm:w-full max-w-lg">
      <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
        <FaCreditCard className="mr-2 text-purple-600" /> Detalles de la Tarjeta
      </h3>

      <div className="relative mb-4">
        <Input
          variant="filled"
          maxLength={19}
          placeholder="Número de Tarjeta (xxxx xxxx xxxx xxxx)"
          focusBorderColor="purple.500"
          type="tel"
          value={formatCardNumber(cardNumber)}
          onChange={(e) => setCardNumber(e.target.value.replace(/\s/g, ''))}
        />
        {cardLogo && (
          <img
            className="w-10 absolute right-3 top-1/2 transform -translate-y-1/2"
            src={cardLogo}
            alt="Tipo de tarjeta"
          />
        )}
      </div>

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
          maxLength={4}
          placeholder="CVC/CVV"
          focusBorderColor="purple.500"
          type="tel"
          className="flex-1"
        />
      </div>

      <Input
        variant="filled"
        mb={4}
        placeholder="Nombre en la Tarjeta"
        focusBorderColor="purple.500"
        type="text"
      />

      <Input
        variant="filled"
        mb={6}
        placeholder="Dirección de Facturación"
        focusBorderColor="purple.500"
        type="text"
      />

      <Button
        onClick={handlePay}
        leftIcon={<FaLock />}
        colorScheme="purple"
        size="lg"
        borderRadius="lg"
        className="w-full font-bold"
      >
        Pagar Ahora
      </Button>

      <div className="w-full mt-6 gap-4 flex justify-center items-center opacity-70">
        <img
          className="w-10 h-6 object-contain"
          src={assets.Mastercard}
          alt="Mastercard"
        />
        <img className="w-10 h-6 object-contain" src={assets.Visa} alt="Visa" />
        <img
          className="w-10 h-6 object-contain"
          src={assets.American}
          alt="American Express"
        />
        <img
          className="w-10 h-6 object-contain"
          src={assets.Binance}
          alt="Binance Pay"
        />
      </div>
    </div>
  );
};
