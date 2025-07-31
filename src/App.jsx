import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/navbar';

function App() {

  return (
    <div className="">
      <Navbar />
      <ItemListContainer saludo="¡Bienvenido a nuestra tienda!"/>
    </div>
  );

}

export default App;