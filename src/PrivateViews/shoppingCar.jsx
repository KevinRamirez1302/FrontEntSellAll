import { Button } from '@chakra-ui/react';
import { CarProduct } from '../PrivateViews/shoppinComponents/carProduct.jsx';
import { UseShopCar } from '../../context/ShoppingContext.jsx';
import { Link } from 'react-router-dom';
import Mastercard from '/img/mastercard.png';
import Visa from '/img/visa.png';
import Binance from '/img/Binance-pay.jpg';
import American from '/img/american-express.png';
import paypal from '/img/paypal.png';

export const CarSection = () => {
  const { allProduct, totalPrice } = UseShopCar();

  return (
    <>
      <section className=" flex p-12 bg-gray-100  justify-around flex-col sm:flex-row gap-4 items-center">
        <div className="md:flex-col w-full md:w-5/12">
          {allProduct.map(({ name, image, _id, price, quantity }) => (
            <CarProduct
              id={_id}
              name={name}
              image={image}
              price={price * quantity}
              key={_id}
              quantity={quantity}
            />
          ))}
        </div>

        <div className="flex flex-col gap-10 md:w-6/12 items-center justify-center ">
          <div className=" flex items-center flex-col bg-white shadow-lg pt-6 pb-10 px-20">
            <h1 className="text-center text-3xl font-montserrat font-semibold">
              Summary
            </h1>
            <div className=" my-6">
              <p className="text-neutral-500 md:text-xl font-montserrat m-2">
                Sub total: {totalPrice()}
              </p>
              <p className="text-neutral-500 md:text-xl font-montserrat m-2">
                Shipping: 1.99${' '}
              </p>
              <p className="text-neutral-500 md:text-xl font-montserrat m-2">
                Total: {totalPrice() > 0 ? parseInt(totalPrice()) + 1.99 : 0}$
              </p>
            </div>
            <Button className=" " color={'white'} colorScheme="purple">
              <Link to="Payment">CHECKOUT</Link>
            </Button>
          </div>
          <div className=" bg-white border-blacks p-10 shadow-lg  ">
            <h1 className=" text-center  text-lg font-montserrat font-semibold">
              Payment Method
            </h1>
            <div className="w-full flex-wrap mt-5 gap-3 flex justify-center items-center">
              <img className="md:w-10 w-8" src={Mastercard} alt="" />
              <img className="md:w-10 w-8" src={Visa} alt="" />
              <img className="md:w-10 w-8" src={American} alt="" />
              <img className="md:w-10 w-8" src={paypal} alt="" />
              <img className="md:w-10 w-8" src={Binance} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
