import { FaTrash } from "react-icons/fa6";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = ({ item }) => {
    const { removeFromCart } = useContext(CartContext);

    return (
        <div className="bg-white flex items-center justify-between p-4 rounded-lg w-1/2">
            <div className="flex items-center gap-4">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded"/>
                <div>
                    <h3 className="font-bold">{item.name}</h3>
                    <p>Cantidad: {item.qty}</p>
                    <p className="font-semibold">${item.price * item.qty}</p>
                </div>
            </div>
            <button onClick={() => removeFromCart(item.id)} className=" text-white border-2 bg-red-500 px-3 py-2 mr-3 rounded-lg hover:bg-red-600 transition duration-300">
                <FaTrash />
            </button>
        </div>
    );
};

export default CartItem;