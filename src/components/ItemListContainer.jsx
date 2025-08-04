const ItemListContainer = ({bienvenida}) => {

    return (
        <section className="flex flex-col items-center mt-10">
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl">{bienvenida}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-5 mt-10">
                {/* Proximamente la lista de productos */}
            </div>
        </section>
    );

}

export default ItemListContainer;