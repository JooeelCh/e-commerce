import { Link } from "react-router-dom";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { IoLibrarySharp } from "react-icons/io5";
import CartWidget from "./CartWidget";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <nav className="grid grid-cols-3 items-center p-4 bg-gray-800 text-white">
            <div className="flex order-1 lg:order-0 justify-center lg:justify-start lg:pl-10 gap-2 lg:gap-4">
                <span className="text-3xl lg:text-4xl">
                <IoLibrarySharp/>
                </span>
                <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl">La Grafica</h1>
            </div>
            <div className="lg:hidden flex justify-start order-0">
                <button onClick={toggleMenu} className="text-2xl ml-2">
                    {menuOpen ? <IoClose /> : <GiHamburgerMenu />}
                </button>
            </div>
            <ul  className={`font-mono flex-col lg:flex-row order-3 lg:order-1 gap-3 lg:gap-10 md:text-lg pl-5 lg:pl-0 ${menuOpen ? "flex" : "hidden"} lg:flex justify-start lg:justify-center mt-4 lg:mt-0`}>
                <li className="hover:scale-110 transition duration-300"><Link to={"/"}>Inicio</Link></li>
                <li className="hover:scale-110 transition duration-300"><Link to={"/catalogue"}>Catalogo</Link></li>
                <li className="hover:scale-110 transition duration-300"><Link to={"/contact"}>Contacto</Link></li> {/* No implementado por el momento */}
            </ul>
            <div className="flex order-2 justify-end lg:text-2xl md:text-xl text-lg pr-5 lg:pr-10">
                <CartWidget />
            </div>
        </nav>
    );

}

export default Navbar;