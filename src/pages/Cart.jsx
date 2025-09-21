import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartList from "../components/cart/CartList";
import CartTotal from "../components/cart/CartTotal";

const Cart = () => {
  const { cart } = useContext(CartContext);

  if (cart.length === 0) {
    return <h1 className="text-3xl font-semibold text-center mb-5">Tu carrito esta vacio</h1>
  }

  return (
    <div className="mt-10 w-full">
      <h1 className="text-3xl font-semibold text-center mb-5">Carrito</h1>
      <CartList items={cart} />
      <CartTotal />
    </div>
  );
};

export default Cart;