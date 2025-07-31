const ItemListContainer = ({ saludo }) => {

  return (
    <div className="flex flex-1 justify-center text-center">
        <h2 className="text-3xl pt-8">{saludo}</h2>
    </div>
  );
  
};

export default ItemListContainer;