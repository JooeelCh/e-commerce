import { Link } from "react-router-dom";

const ItemCard = ( { id, name, description, price }) => {

    return (
        <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold text-center">{name}</h2>
            <p className="mb-2 text-center">{description}</p>
            <p className="text-center">${price}</p>

            <Link to={`item/${id}`}>
                <span className="flex justify-center">Ver Detalle</span>
            </Link>
        </div>
    )

}

export default ItemCard;