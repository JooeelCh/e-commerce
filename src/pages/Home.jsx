import { useEffect, useState } from "react";
import FeaturedItems from "../components/FeaturedItems";

const Home = () => {

    const [products, setProducts] = useState([]);

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
        <h2 className="text-3xl font-semibold">Bienvenido a la grafica</h2>
        <FeaturedItems products={products} />
        </div>
    );

}

export default Home;