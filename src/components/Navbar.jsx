import { IoLibrarySharp } from "react-icons/io5";
import CartWidget from "./CartWidget";

const Navbar = () => {

    return (
        <nav className="grid grid-cols-3 items-center p-4 bg-gray-800 text-white">
            <div className="flex items-center pl-10 gap-4">
                <IoLibrarySharp size={48}/>
                <h1 className="text-4xl self-end font-serif">La Grafica</h1>
            </div>
            <ul className="flex justify-center gap-10 text-lg font-mono">
                <li>Inicio</li>
                <li>Catalogo</li>
                <li>Contacto</li>
            </ul>
            <div className="flex justify-end pr-10">
                <CartWidget />
            </div>
        </nav>
    );

}

export default Navbar;