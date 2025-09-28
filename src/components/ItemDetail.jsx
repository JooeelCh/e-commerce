import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ItemDetail = ({ id, name, image, price, description, stock }) => {

    const { addToCart } = useContext(CartContext);

    const handleAddToCart = () => {
        addToCart({ id, name, price, stock }, 1);
    }

    return (
        <div className="item-detail">
            <h1 className="text-2xl font-bold">{name}</h1>
            <img src={image} alt={name} className="w-full h-auto" />
            <p className="text-lg mt-4">{description}</p>
            <p className="text-xl font-semibold mt-2">${price}</p>
            <button onClick={(e) => { e.preventDefault(); handleAddToCart(); }} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Añadir al carrito</button>
        </div>
    );
    
}
export default ItemDetail;