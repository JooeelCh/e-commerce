import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {

  return (
    <div className="flex items-center mr-16">
        <button className="cursor-pointer">
          <FaShoppingCart size={24}/>
        </button>
    </div>
  );

};

export default CartWidget;