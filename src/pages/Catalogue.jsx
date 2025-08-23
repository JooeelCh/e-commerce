import ItemListContainer from "../components/ItemListContainer";

const Catalogue = () => {

    return (
        <div className="flex flex-col items-center mt-10">
            <h2 className="text-3xl font-semibold">Catalogo</h2>
            <ItemListContainer />
        </div>
    );

}

export default Catalogue;