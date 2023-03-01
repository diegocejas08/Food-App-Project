// Estilos
import "./App.css";
// Componentes

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Nav/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Carrito from "./Carrito/Carrito";
// import { FaShopify } from "react-icons/fa";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/" element={<Contact />} />
          <Route path="/" element={<Header />} />
          <Route path="/Carrito" element={<Carrito/>}/>
        </Routes>
      </BrowserRouter>
      <Header />
        <About />
        <Contact />
    </>
  );
}

export default App;
