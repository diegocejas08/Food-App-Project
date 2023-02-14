import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Nav-img/Logo.webp";
import BurguerButton from "./BurguerButton";

const Navbar = () => {
    // const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="text-center sm:text-left">
            <nav className=" bg-yellow-100" >
                <div className="flex justify-between items-center h-44 relative shadown-sm px-8 xl:px-0">
                    <img className="ml-4 h-28 md:h-40" src={Logo} alt="" />
                    
                        
                    <ul className=" lg:flex hidden space-x-6 ">
                        <li className="transform motion-safe:hover:scale-110 font-serif font-bold text-4xl text-green-600">
                            <Link to={'/'}>Home</Link>
                        </li>
                        <li className="transform motion-safe:hover:scale-110 font-serif font-bold text-4xl text-green-600">
                            <Link to={'/About'}>Nosotros</Link>
                        </li>
                        <li className="transform motion-safe:hover:scale-110  font-serif font-bold text-4xl text-green-600">
                            <Link to={'/'}>Menú</Link>
                        </li>
                        <li className="transform motion-safe:hover:scale-110  font-serif font-bold text-4xl text-green-600">
                            <Link to={'/'}>Galería</Link>
                        </li>
                        <li className="transform motion-safe:hover:scale-110 font-serif font-bold text-4xl text-green-600">
                            <Link to={'/Contact'}>Contacto</Link>
                        </li>
                    </ul>
                    <BurguerButton />
                    </div>
            </nav>
           
        </div>

    );
};

export default Navbar;
