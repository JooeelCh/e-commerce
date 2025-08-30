import { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import ItemCard from "./ItemCard";

const ItemListContainer = ({ title }) => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getItems = async () => {
            try {
                const res = await fetch('https://68a0c1816f8c17b8f5d873ff.mockapi.io/products');
                const data = await res.json();
                setProducts(data);
            } catch (error) {
                console.error('Error de Fetch:', error);
            } finally {
                setLoading(false);
            }

        };
        getItems();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center font-semibold text-3xl">
                <AiOutlineLoading3Quarters className="animate-spin" />
                <span className="ml-2">Cargando...</span>
            </div>
        );
    }

    return (
        <section className="flex flex-col items-center mt-10 mb-20">
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl">{title}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-3 mt-10">
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