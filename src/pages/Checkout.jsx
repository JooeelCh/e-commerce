import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { db } from "../data/fireBaseConfig";
import { collection, addDoc, Timestamp, updateDoc, doc } from "firebase/firestore";

const Checkout = () => {
  const { cart, totalPrice, clearCart } = useContext(CartContext);

  const [buyer, setBuyer] = useState({
    name: "",
    email: "",
    address: ""
  });

  const [orderId, setOrderId] = useState(null);

  const handleChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const order = {
      buyer,
      items: cart,
      total: totalPrice,
      date: Timestamp.fromDate(new Date())
    };

    try {
      const docRef = await addDoc(collection(db, "orders"), order);
      setOrderId(docRef.id);

      for (const item of cart) {
        const itemRef = doc(db, "products", item.id);
        await updateDoc(itemRef, {
          stock: item.stock - item.qty
        });
      }

      clearCart();
    } catch (error) {
      console.error("Error generando la orden:", error);
    }
  };

  if (orderId) {
    return (
      <div className="flex flex-col items-center mt-10">
        <h2 className="text-2xl font-bold">¡Gracias por tu compra!</h2>
        <p>Tu número de orden es: <span className="font-mono">{orderId}</span></p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center w-full h-full">
      <h1 className="text-3xl font-semibold text-center mb-5">Finalizar compra</h1>
      <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-2 w-1/4 h-110 p-4 bg-white rounded-xl shadow">
        <input name="name" value={buyer.name} onChange={handleChange} placeholder="Nombre" className="border w-1/2 p-2 rounded"/>
        <input name="email" value={buyer.email} onChange={handleChange} placeholder="Correo Electronico" className="border w-1/2 p-2 rounded"/>
        <input name="address" value={buyer.address} onChange={handleChange} placeholder="Dirección" className="border w-1/2 p-2 mb-12 rounded"/>
        <button type="submit" className="flex self-center justify-center bg-green-500 text-white py-2 w-1/2 rounded hover:bg-green-600 transition">Confirmar compra</button>
      </form>
    </div>
  );
};

export default Checkout;
