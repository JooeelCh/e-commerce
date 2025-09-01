import ItemListContainer from "../components/ItemListContainer";

const Catalogue = () => {
    return (
        <div className="flex flex-col mt-10 w-full min-h-[100vh]">
            <h2 className="text-3xl font-semibold text-center mb-5">Catalogo</h2>
            <ItemListContainer />
        </div>
    );
};

export default Catalogue;
