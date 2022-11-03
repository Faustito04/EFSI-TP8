import { Link } from "react-router-dom";
import { useContext, useState } from "react"
import {ProductoContext} from "../helpers/productoContext"

export default function Card(props) {
    const context = useContext(ProductoContext)
    let [cant, setCantidad] = useState(0)

    return (
        <div className="text-center p-2 border-2 border-[#71a7ab] hover:bg-[#71a7ab] hover:cursor-pointer rounded-sm transition">
            <BotonCarrito enCarrito={props.cantidadCarrito}></BotonCarrito>
            <Link to={props.href}>
                <img className="w-full" src={props.thumbnail} alt="" />
                <h3 className="text-lg font-bold pt-1 leading-tight">{props.title}</h3>
                <p className="leading-tight">{props.description}</p>
            </Link>
            <input type="number" className="m-2 border-b border-gray-300" placeholder="0" onChange={(evento) => {setCantidad(evento.target.value)}}></input>
            <button className="w-fit px-4 py-2 bg-blue-200 rounded-md m-2" onClick={() => context.añadirProducto(props.id, cant)}>Añadir</button>
            <button className="w-fit px-4 py-2 bg-blue-200 rounded-md" onClick={() => context.eliminarProducto(props.id)}>Eliminar</button>
        </div>
    )
}//todo