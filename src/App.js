// Estilos
import './App.css';
// Componentes
// import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Nav/Navbar';
import About from './components/About';
import Contact from './components/Contact'

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/About" element={<About/>} />
        <Route path="/Contact" element={<Contact/>}/>
        {/* <Route path='/' element= {Menú} /> */}
      </Routes>
      {/* <Header /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
