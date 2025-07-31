import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/navbar';
import Footer from './components/Footer';

const App = () => {

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <ItemListContainer saludo="¡Bienvenido a nuestra tienda!"/>
      <Footer />
    </div>
  );

}

export default App;