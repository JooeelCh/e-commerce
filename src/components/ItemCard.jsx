import { Link } from "react-router-dom";

const ItemCard = ( { id, name, description, price }) => {

    return (
        <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-bold">{name}</h2>
            <p className="mb-2">{description}</p>
            <p>${price}</p>

            <Link to={`item/${id}`}>Ver Detalle</Link>
        </div>
    )

}

export default ItemCard;