import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import ItemDetail from './ItemDetail';
import NotFound from './NotFound';

const ItemDetailContainer = () => {

    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getItem = async () => {
            try {
                const res = await fetch(`https://68a0c1816f8c17b8f5d873ff.mockapi.io/products/${id}`);
                if (!res.ok) throw new Error("Producto no encontrado");
                const data = await res.json();
                setItem(data);
            } catch (error) {
                console.error('Error de Fetch:', error);
                setItem(null);
            } finally {
                setLoading(false);
            }
        }
        getItem();
    }, [id]);

    if (loading) {
        return (
            <div className="flex justify-center items-center font-semibold text-3xl">
                <AiOutlineLoading3Quarters className="animate-spin" />
                <span className="ml-2">Cargando...</span>
            </div>
        )
    }

    if (!item) {
        return (
            <>
                <NotFound />
            </>
        );
    }

    return (
        <div>
            <ItemDetail products={item} />
        </div>
    );

}

export default ItemDetailContainer;