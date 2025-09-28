import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { doc, getDoc } from "firebase/firestore";
import { db } from '../data/fireBaseConfig';
import ItemDetail from '../components/ItemDetail';
import NotFound from '../components/NotFound';

const ItemDetailContainer = () => {

    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getItem = async () => {
            try {
                const res = doc(db, "products", id);
                const data = await getDoc(res);
                if (data.exists()) {
                    setItem({ id: data.id, ...data.data() });
                } else {
                    setItem(null);
                }
            } catch (error) {
                console.error('Error al cargar el producto:', error);
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
            <ItemDetail {...item} />
        </div>
    );

}

export default ItemDetailContainer;