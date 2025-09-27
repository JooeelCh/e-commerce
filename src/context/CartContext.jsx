import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {

    console.log("[addToCart] product:", product);
    console.log("[addToCart] quantity:", quantity);
    console.log("[addToCart] product.stock:", product?.stock);

    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      if(exists.qty + quantity <= product.stock){
        setCart(
          cart.map((item) =>
            item.id === product.id ? { ...item, qty: item.qty + quantity } : item
          )
        );
      } else {
        alert("No hay suficiente stock disponible");
      }
    } else {
      if(quantity <= product.stock){
          setCart([...cart, { ...product, qty: quantity}]);
      } else {
        alert("No hay suficiente stock disponible");
        }   
      } 
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);

  const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, totalItems, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
