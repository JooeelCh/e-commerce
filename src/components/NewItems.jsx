import ItemCard from "./ItemCard";

const NewItems = ({ products }) => {

    const newItems = products.filter(p => p.new)

    return (
        <div className="flex flex-col items-center mt-10">
            <h2 className="text-2xl self-start font-bold mb-4">Nuevos Productos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {newItems.map((prod) => (
                    <ItemCard 
                        key={prod.id}
                        {...prod}
                    />
                ))}
            </div>
        </div>
    );

}

export default NewItems;