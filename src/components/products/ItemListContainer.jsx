import { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../data/fireBaseConfig";
import ItemCard from "../ItemCard";
import CategoryFilter from "../CategoryFilter";

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getItems = async () => {
            try {
                const res = await getDocs(collection(db, "products"));
                const data = res.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setProducts(data);
                setFilteredProducts(data);

                const cats = [...new Set(data.map((p) => p.cat))];
                setCategories(cats);
            } catch (error) {
                console.error("Error al obtener productos:", error);
            } finally {
                setLoading(false);
            }
        };
        getItems();
    }, []);

    useEffect(() => {
        if (selectedCategory === "all") {
            setFilteredProducts(products);
        } else {
            const filtered = products.filter((p) => p.cat === selectedCategory);
            setFilteredProducts(filtered);
        }
    }, [selectedCategory, products]);

    if (loading) {
        return (
            <div className="flex justify-center items-center font-semibold text-3xl">
                <AiOutlineLoading3Quarters className="animate-spin" />
                <span className="ml-2">Cargando...</span>
            </div>
        );
    }

    return (
        <section className="flex mt-10 mb-20 w-full max-w-7xl mx-auto">
            <div className="w-60 flex-shrink-0">
                <CategoryFilter
                    categories={categories}
                    selectedCategory={selectedCategory}
                    onCategoryChange={setSelectedCategory}
                />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ml-5 min-h-[600px]">
                {filteredProducts.map((prod) => (
                    <ItemCard key={prod.id} {...prod} />
                ))}
            </div>
        </section>
    );
};

export default ItemListContainer;
