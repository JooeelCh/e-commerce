import ItemCard from "./ItemCard";
import { products } from "../data/item";

const ItemListContainer = ({ title }) => {

    return (
        <section className="flex flex-col items-center mt-10">
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl">{title}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-5 mt-10">
                {products.map((prod) => (
                    <ItemCard 
                        key={prod.id}
                        {...prod}
                    />
                ))}
            </div>
        </section>
    );

}

export default ItemListContainer;