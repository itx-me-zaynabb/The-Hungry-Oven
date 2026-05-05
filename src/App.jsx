import CustomCursor from "./components/CustomCursor";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <CustomCursor />
      <Nab
      <Home />

       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
    </>
  );
}

export default App;
