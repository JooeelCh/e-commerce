import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ItemCard = ( { id, name, price }) => {
    
    const { addToCart } = useContext(CartContext);

    const handleAddToCart = () => {
        addToCart({ id, name, price });
    }

    return (
        <Link to={`/products/item/${id}`}>
            <div className="flex flex-col justify-between min-h-[200px] min-w-[250px] border-1 bg-white p-4 rounded-lg shadow hover:scale-102 transition-transform duration-300">
                <h2 className="text-xl font-bold text-center">{name}</h2>
                <p className="text-center">${price}</p>
                <button onClick={(e) => { e.preventDefault(); handleAddToCart(); }} className="mt-2 bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600 transition-colors duration-300">Agregar al carrito</button>
            </div>
        </Link>
    )

}

export default ItemCard;