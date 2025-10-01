import { FaTrashCan } from 'react-icons/fa6'
import { UseShopCar } from '../../../context/ShoppingContext'

export const CarProduct = (props) => {
  const { deleteProduct } = UseShopCar()
  return (
    <>
      <div
        key={props.id}
        className="flex items-center p-4  bg-white  border-y-2 "
      >
        <figure>
          <img
            src={props.image}
            alt={props.name}
            className="h-16 w-16 flex-shrink-0 object-cover rounded-md"
          />
        </figure>

        <div className="m-4 pl-8 pr-8 flex-1 ">
          <p className="text-lg font-semibold">{props.name}</p>
          <p className="text-gray-500">
            ${props.price} x {props.quantity}
          </p>
        </div>
        <button
          onClick={() => deleteProduct(props.id)}
          className="text-red-500 hover:text-red-700"
        >
          <FaTrashCan />
        </button>
      </div>
    </>
  )
}
