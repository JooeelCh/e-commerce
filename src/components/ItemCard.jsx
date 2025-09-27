import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ItemCard = ( { id, name, price, stock }) => {
    
    const { addToCart } = useContext(CartContext);

    const handleAddToCart = () => {
        addToCart({ id, name, price, stock }, 1);
    }

    return (
        <Link to={`/products/item/${id}`}>
            <div className="flex flex-col justify-between min-h-[200px] min-w-[250px] border-1 bg-white p-4 rounded-lg shadow hover:scale-102 transition-transform duration-300">
                <h2 className="text-xl font-bold text-center">{name}</h2>
                <div className="flex justify-between items-center mb-1">
                <p className="text-center text-lg">${price}</p>
                <button onClick={(e) => { e.preventDefault(); handleAddToCart(); }} className="flex justify-center self-end w-1/5 h-8 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300">
                    <FaShoppingCart className="flex self-center" />
                </button>
                </div>
            </div>
        </Link>
    )

}

export default ItemCard;