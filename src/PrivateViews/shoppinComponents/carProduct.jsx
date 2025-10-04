import { FaTrashCan } from 'react-icons/fa6';
import { UseShopCar } from '../../../context/ShoppingContext';

export const CarProduct = (props) => {
  const { deleteProduct } = UseShopCar();
  return (
    <>
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
          onClick={() => deleteProduct(props.id)}
          className="text-red-500 hover:text-red-700"
        >
          <FaTrashCan />
        </button>
      </div>
    </>
  );
};
