const ItemDetail = ({ products }) => {
    return (
        <div className="item-detail">
            <h1 className="text-2xl font-bold">{products.name}</h1>
            <img src={products.image} alt={products.name} className="w-full h-auto" />
            <p className="text-lg mt-4">{products.description}</p>
            <p className="text-xl font-semibold mt-2">${products.price}</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Añadir al carrito</button>
        </div>
    );
}

export default ItemDetail;