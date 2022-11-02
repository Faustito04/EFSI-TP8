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
import ProductoContextProvider from "./helpers/productoContext";
import FormContextProvider from "./helpers/formsContext";

export default function App() {
    return (
        <ProductoContextProvider>
            <FormContextProvider>
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
            </FormContextProvider>
        </ProductoContextProvider>
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
