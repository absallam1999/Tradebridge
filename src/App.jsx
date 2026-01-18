import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Categories from "./pages/Categories";
import CategoryProducts from "./pages/CategoryProducts";
import Brands from "./pages/Brands";
import BrandProducts from "./pages/BrandProducts";
import Inquiry from "./pages/Inquiry";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import ErrorPage from "./pages/404";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Router>
      <div className={darkMode ? "dark" : ""}>
        <Layout darkMode={darkMode} setDarkMode={setDarkMode}>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/products" element={<Products />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/category/:id" element={<CategoryProducts />} />
              <Route path="/brands" element={<Brands />} />
              <Route path="/brand/:id" element={<BrandProducts />} />
              <Route path="/inquiry" element={<Inquiry />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </AnimatePresence>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
