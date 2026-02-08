import { useState } from 'react'
import './App.css'
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Productos from "./components/ProductCard";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { motion, AnimatePresence } from "framer-motion";

export default function App() {
  return (
    <div className="bg-white antialiased selection:bg-orange-100 selection:text-orange-900">
      <AnimatePresence>
        <Header />
        
        <main>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* INICIO */}
            <div id="inicio">
              <Hero />
            </div>
            
            {/* NOSOTROS */}
            <div id="nosotros">
              <About />
            </div>

            <div className="max-w-7xl mx-auto px-6">
              <div className="h-px bg-linear-to-r from-transparent via-gray-200 to-transparent" />
            </div>

            {/* PRODUCTOS */}
            <div id="productos">
              <Productos />
            </div>

            <Blog />
            
            {/* CONTACTO */}
            <div id="contacto">
              <Contact />
            </div>

          </motion.div>
        </main>

        <Footer />
      </AnimatePresence>
    </div>
  );
};