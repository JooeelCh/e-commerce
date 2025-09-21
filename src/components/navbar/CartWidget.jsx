import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {

    const { totalItems } = useContext(CartContext);

    return (
        <Link to={"/cart"} className="flex cursor-pointer transform hover:scale-110 transition duration-300">
            <FaShoppingCart />
            { totalItems > 0 && <span className="flex items-center justify-center ml-1 bg-red-500 text-white rounded-full px-2 text-sm">{totalItems}</span> }
        </Link>
    );

}

export default CartWidget;