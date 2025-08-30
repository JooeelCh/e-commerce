import { Link } from "react-router-dom";

const ItemCard = ( { id, name, description, price }) => {

    return (
        <Link to={`/products/item/${id}`}>
            <div className="bg-white p-4 rounded-lg shadow hover:scale-105 transition-transform duration-300">
                <h2 className="text-xl font-bold text-center">{name}</h2>
                <p className="mb-2 text-center">{description}</p>
                <p className="text-center">${price}</p>
            </div>
        </Link>
    )

}

export default ItemCard;