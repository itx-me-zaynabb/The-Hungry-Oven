import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Deals from "./pages/Deals";
import Contact from "./pages/Contact";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <CustomCursor />
      <Home />
      <Navbar />
    </>
  );
}

export default App;
