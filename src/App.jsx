import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";


function App() {

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow bg-gray-200"> 
          <Routes>
            <Route path="/" element={<ItemListContainer title="Bienvenido a La Grafica" />} />
            <Route path="/products" element={<ItemListContainer title="Catalogo" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App
