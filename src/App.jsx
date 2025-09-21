import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Catalogue from "./pages/catalogue";
import ItemDetailContainer from "./pages/ItemDetailContainer";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";
import CartProvider from "./context/CartContext";


function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1 flex justify-center items-center bg-gray-200"> 
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/products" element={<Catalogue/>} />
              <Route path="/products/item/:id" element={<ItemDetailContainer />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App
