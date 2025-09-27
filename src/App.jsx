import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home";
import Catalogue from "./pages/catalogue";
import ItemDetailContainer from "./pages/ItemDetailContainer";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer/Footer";
import CartProvider from "./context/CartContext";
import AuthProvider from "./context/AuthContext";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import LoginForm from "./components/users/LoginForm";
import RegisterForm from "./components/users/RegisterForm";


function App() {

  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 flex justify-center items-center bg-gray-200"> 
              <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/products" element={<Catalogue/>} />
                <Route path="/products/item/:id" element={<ItemDetailContainer />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/register" element={<RegisterForm />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}

export default App
