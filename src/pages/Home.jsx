import FeaturedItems from "../components/products/FeaturedItems";
import NewItems from "../components/products/NewItems";

const Home = () => {

    return (
        <div className="flex flex-col mt-10">
            <h1 className="text-3xl font-semibold text-center mb-5">Bienvenido a la grafica</h1>
            <NewItems />
            <FeaturedItems />
        </div>
    );

}

export default Home;