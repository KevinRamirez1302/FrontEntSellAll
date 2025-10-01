import { Input, Button, Stack, Select } from '@chakra-ui/react';
import Mastercard from '/img/mastercard.png';
import Visa from '/img/visa.png';
import Binance from '/img/Binance-pay.jpg';
import American from '/img/american-express.png';
import { useState } from 'react';

// formulario de la tarjeta
const CardPaymentForm = ({ cardNumber, setCardNumber }) => {
  const getCardType = (number) => {
    if (!number || number.length < 1) return null;
    const firstDigit = number.toString().charAt(0);
    if (firstDigit === '2') return Mastercard;
    if (firstDigit === '4') return Visa;
    return null;
  };

  return (
    <div className="flex flex-col w-full sm:w-4/5">
      <Input
        margin={2}
        variant="filled"
        width={'auto'}
        maxLength={16}
        placeholder="Card Number"
        focusBorderColor="purple.400"
        type="text" // Cambiado a text
        onChange={(e) => setCardNumber(e.target.value)}
      />
      {getCardType(cardNumber) && (
        <img
          className="w-8 ml-2"
          src={getCardType(cardNumber)}
          alt="Card logo"
        />
      )}
      <div className="flex">
        <Input
          variant="filled"
          margin={2}
          width={'auto'}
          placeholder="Expiracion"
          maxLength={5}
          focusBorderColor="purple.400"
          type="text"
        />
        <Input
          variant="filled"
          margin={2}
          maxLength={3}
          width={'auto'}
          placeholder="CVC"
          focusBorderColor="purple.400"
          type="text" // Cambiado a text
        />
      </div>
      <Input
        variant="filled"
        margin={2}
        width={'auto'}
        placeholder="Name"
        focusBorderColor="purple.400"
        type="text" // Cambiado a text
      />
      <Input
        variant="filled"
        margin={2}
        width={'auto'}
        placeholder="Adress"
        focusBorderColor="purple.400"
        type="text" // Cambiado a text
      />
      <Button className="w-full mt-5" colorScheme="purple" type="submit">
        Pay
      </Button>
      <div className="w-full mt-5 gap-3 flex justify-center items-center">
        <img className="w-10" src={Mastercard} alt="" />
        <img className="w-10" src={Visa} alt="" />
        <img className="w-10" src={American} alt="" />
        <img className="w-10" src={Binance} alt="" />
      </div>
    </div>
  );
};

export const Payment = () => {
  const [cardNumber, setCardNumber] = useState(''); // Estado inicial como string
  const [method, setMethod] = useState('');

  return (
    <section className="w-full h-92 flex items-center justify-center">
      <div className="w-4/5 md:w-3/5 flex flex-col items-center justify-center">
        <form
          className="w-4/5 md:w-3/5 flex flex-col items-center justify-center h-80"
          action=""
        >
          <h2 className="text-center mb-5 text-xl font-bold text-violet-800">
            Payment
          </h2>
          <Stack className="mb-10">
            <Select onChange={(e) => setMethod(e.target.value)}>
              <option value="Card">Credit/Debit Card</option>
              <option value="Binance">Binance Pay</option>
            </Select>
          </Stack>
          {method === 'Card' || method === '' ? (
            <CardPaymentForm
              cardNumber={cardNumber}
              setCardNumber={setCardNumber}
            />
          ) : method === 'Binance' ? (
            <button>
              <img
                src="https://miro.medium.com/v2/resize:fit:750/1*unqlWGZpOPa6o-E9JTbDZg.jpeg"
                alt=""
                className="w-44 rounded-sm"
              />
            </button>
          ) : null}
        </form>
      </div>
    </section>
  );
};
