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
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-2xl font-bold mb-4">Finalizar compra</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-1/3">
        <input type="text" name="name" placeholder="Nombre" value={buyer.name} onChange={handleChange} className="border p-2 rounded"/>
        <input type="email" name="email" placeholder="Email" value={buyer.email} onChange={handleChange} className="border p-2 rounded"/>
        <input type="text" name="address" placeholder="Dirección" value={buyer.address} onChange={handleChange} className="border p-2 rounded"/>
        <button type="submit" className="bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">Confirmar compra</button>
      </form>
    </div>
  );
};

export default Checkout;
