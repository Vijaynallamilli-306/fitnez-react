import { Route, Routes } from 'react-router-dom';
import './App.css';
import Classes from './pages/Classes';
import { Contact } from './pages/Contact';
import { Gallery } from './pages/Gallery';
import Home from './pages/Home';
import { Ourgym } from './pages/Ourgym';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="App font-poppins">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/our-gym" element={<Ourgym />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
