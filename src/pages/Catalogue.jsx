import ItemListContainer from "../components/products/ItemListContainer";

const Catalogue = () => {
    return (
        <div className="flex flex-col mt-10 w-full">
            <h1 className="text-3xl font-semibold text-center mb-5">Catalogo</h1>
            <ItemListContainer />
        </div>
    );
};

export default Catalogue;
