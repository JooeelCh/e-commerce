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
            <button onClick={() => removeFromCart(item.id)} className="bg-red-500 text-white px-3 py-1 mr-3 rounded hover:bg-red-600 transition">
                Eliminar
            </button>
        </div>
    );
};

export default CartItem;