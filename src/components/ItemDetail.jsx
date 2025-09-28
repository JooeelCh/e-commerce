import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import ItemCount from './ItemCount';

const ItemDetail = ({ id, name, image, price, description, stock }) => {

    const { addToCart } = useContext(CartContext);

    return (
        <div className="flex w-1/2 justify-around">
            <img src={image} alt={name} className="w-1/2" />
            <div className="flex flex-col items-center w-1/2">
                <h1 className="text-2xl font-bold">{name}</h1>
                <p className="text-lg mt-4">{description}</p>
                <p className="text-xl font-semibold mt-2 mb-10">${price}</p>
                <ItemCount stock={stock} initial={1} onAdd={(qty) => addToCart({ id, name, price, stock }, qty)} />
            </div>
        </div>
    );
    
}
export default ItemDetail;