import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center py-2 sm:px-10 md:px-20 lg:px-40">
            <Link to="/"><img src="../img/Logo.png" alt="logo" className="w-24 h-24" /></Link>
            <div className="flex gap-4 items-center">
                <Link to="/"><p className="text-sm">INICIO</p></Link>
                <Link to="/quienessomos"><p className="text-sm">QUIENES SOMOS</p></Link>
                <Link to="/productos"><p className="text-sm">PRODUCTOS</p></Link>
                <Link to="/contacto"><p className="text-sm">CONTACTO</p></Link>
                <Link to="/carrito"><p className="text-sm">CARRITO</p></Link>
            </div>
        </nav>
    )
}