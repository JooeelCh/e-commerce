import FeaturedItems from "../components/FeaturedItems";
import NewItems from "../components/NewItems";

const Home = () => {

    return (
        <div className="flex flex-col mt-10">
            <h2 className="text-3xl font-semibold text-center mb-5">Bienvenido a la grafica</h2>
            <NewItems />
            <FeaturedItems />
        </div>
    );

}

export default Home;