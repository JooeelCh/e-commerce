import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../data/fireBaseConfig";
import ItemCard from "./ItemCard";

const FeaturedItems = () => {

    const [products, setProducts] = useState([]);
    const featured = products.filter(p => p.featured);

    useEffect(() => {
        const getItems = async () => {
            try {
                const res = await getDocs(collection(db, "products"));
                const data = res.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        getItems();
    }, []);

    return (
        <div className="flex flex-col items-center mt-15 mb-20">
            <h2 className="text-3xl self-start mb-4">Conoce nuestros <span className="font-bold">productos destacados</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
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