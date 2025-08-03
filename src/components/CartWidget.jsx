import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {

    return (
        <button className="cursor-pointer transform hover:scale-110 transition duration-300">
            <FaShoppingCart size={24} />
        </button>
    );

}

export default CartWidget;