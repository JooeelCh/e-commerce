import { Link } from "react-router-dom";
import Checkout from "../../pages/Checkout";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartTotal = () => {
  const { cart, clearCart } = useContext(CartContext);

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

    return (
        <div className="flex items-end mt-6 justify-between">
            <p className="text-3xl font-bold ml-10">Total: ${totalPrice}</p>
            <div className="mr-10">
            <button onClick={clearCart} className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
                Vaciar carrito
            </button>
            <Link to="/checkout" element={<Checkout />}>
            <button className="mt-2 ml-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
                Finalizar compra
            </button>
            </Link>
            </div>
        </div>
    );
};

export default CartTotal;