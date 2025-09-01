import FeaturedItems from "../components/FeaturedItems";
import NewItems from "../components/NewItems";

const Home = () => {

    return (
        <div className="flex flex-col items-center mt-10">
            <h2 className="text-3xl font-semibold mb-5">Bienvenido a la grafica</h2>
            <NewItems />
            <FeaturedItems />
        </div>
    );

}

export default Home;