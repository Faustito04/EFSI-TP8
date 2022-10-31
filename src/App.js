import * as React from "react";
import { BrowserRouter as Router, Route, Routes, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Producto from "./pages/Producto";
import Productos from "./pages/Productos";
import QuienesSomos from "./pages/QuienesSomos";
import Carrito from "./pages/Carrito";
import Contacto from "./pages/Contacto";
import ContextProvider from "./helpers/contextState";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="productos" element={<Productos />} />
                    <Route path="producto/:id" element={<Producto />} />
                    <Route path="quienessomos" element={<QuienesSomos />} />
                    <Route path="contacto" element={<Contacto />} />
                    <Route path="carrito" element={<Carrito />} />
                </Route>
            </Routes>
        </Router>
    );
}

function Layout() {
    return (
        <div>
                <Navbar />
                <Outlet />
                <Footer />
        </div>
    );
}
