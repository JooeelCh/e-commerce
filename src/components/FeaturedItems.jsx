import { useEffect, useState } from "react";
import ItemCard from "./ItemCard";

const FeaturedItems = () => {

    const [products, setProducts] = useState([]);
    const featured = products.filter(p => p.featured);

    useEffect(() => {
        const getItems = async () => {
            try {
                const res = await fetch('https://68a0c1816f8c17b8f5d873ff.mockapi.io/products');
                const data = await res.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        getItems();
    }, []);

    return (
        <div className="flex flex-col items-center mt-10">
            <h2 className="text-2xl self-start font-bold mb-4">Productos Destacados</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {featured.map((prod) => (
                    <ItemCard 
                        key={prod.id}
                        {...prod}
                    />
                ))}
            </div>
        </div>
    );
}

export default FeaturedItems;