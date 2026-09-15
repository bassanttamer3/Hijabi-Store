import Navbar from './components/Navbar';
import './App.css';
import ProductCard from './components/ProductCard';
import HeroSection from './components/HeroSection';
import HijabsPage from './Pages/HijabsPage';
import KhimarsPage from './Pages/KhimarsPage';
import AccessoriesPage from './Pages/AccessoriesPage';
import ScarvesPage from './Pages/ScarvesPage';
import MyItemsPage from './Pages/MyItemsPage';
import Girl1 from './assets/Girl1.png';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ShopProvider } from './Context/ShopContext';

function App() {
  return (
    <ShopProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <HeroSection />
                <ProductCard id={1} name="Silk Hijab" price="19.99" image={Girl1} />
              </>
            } 
          />
          <Route path="/hijabs" element={<HijabsPage />} />
          <Route path="/khimars" element={<KhimarsPage />} />
          <Route path="/accessories" element={<AccessoriesPage />} />
          <Route path="/scarves" element={<ScarvesPage />} />
          <Route path="/my-items" element={<MyItemsPage />} />
        </Routes>
      </BrowserRouter>
    </ShopProvider>
  );
}

export default App;