import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import Footer from "./components/Footer";


function App() {

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-200"> 
        <ItemListContainer bienvenida = "Bienvenido a La Grafica" />
      </main>
      <Footer />
    </div>
  );
}

export default App
