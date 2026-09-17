import Navbar from "./components/Navbar";
import "./App.css";
import HeroSection from "./components/HeroSection";
import Footer from "./components/footer";
import HijabsPage from "./Pages/HijabsPage";
import KhimarsPage from "./Pages/KhimarsPage";
import AccessoriesPage from "./Pages/AccessoriesPage";
import ScarvesPage from "./Pages/ScarvesPage";
import MyItemsPage from "./Pages/MyItemsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ShopProvider } from "./Context/ShopContext";

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
                <Footer />
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
