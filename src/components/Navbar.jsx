import CartWidget from './CartWidget';
import reactLogo from '../assets/react.svg';

const NavBar = () => {
    
    return (
    <nav className="bg-neutral-400 flex justify-between items-center px-10 py-4">
        <div className="flex flex-1 items-center gap-4 text-3xl">
            <img src={reactLogo} alt="React Logo" className="h-16" />
            <h1 className="">La Grafica</h1>
        </div>
        <div className="flex flex-1 justify-center">
            <ul className="flex gap-10 text-lg">
                <li><a href="/">Inicio</a></li>
                <li><a href="/Products">Productos</a></li>
                <li><a href="/Contact">Contacto</a></li>
            </ul>
        </div>
        <div className="flex flex-1 justify-end">
            < CartWidget/>
        </div>
    </nav>
  );

};

export default NavBar;