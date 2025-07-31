import ItemList from './ItemList';

const ItemListContainer = ({ saludo }) => {

  return (
    <section className="flex flex-1 justify-center">
      <h2 className="text-3xl pt-8">{saludo}</h2>
      < ItemList />
    </section>
  );
  
};

export default ItemListContainer;