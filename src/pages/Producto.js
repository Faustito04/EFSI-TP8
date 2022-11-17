import React from "react";
import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import {ProductoContext} from "../helpers/productoContext"

export default function Producto() {
    const { id } = useParams();
    const [producto, setProducto] = useState();
    let [cant, setCantidad] = useState(0)
    const context = useContext(ProductoContext);

    setProducto(context.productos.find(prod => prod.id === id))

    function BotonCarrito(enCarrito) {
        if (!enCarrito) {
            return <div className="rounded-full text-center bg-green-500 mb-1">En Carrito</div>
        }
    }

    function BotonEliminar(enCarrito) {
        if (!enCarrito) {
            return <button className="w-fit px-4 py-2 bg-blue-200 rounded-md" onClick={() => context.eliminarProducto(producto.id)}>Eliminar</button>
        }
    }

    return (
        <section className="mx-auto w-[95%] md:w-[750px]">
            <h2 className="text-2xl font-semibold mb-4"><img src={producto?.thumbnail} alt="producto"/></h2>
                <h1 className="text-2xl">{producto?.title}</h1>
                <p>{producto?.description}</p>
                <p>Precio: {producto?.price}</p>
                <p>Marca: {producto?.brand}</p>
                <p>Rating: {producto?.rating}/5</p>
                <p>Stock: {producto?.stock}</p>
                <BotonCarrito enCarrito={(producto.cantidadCarrito)}/ >
                <input type="number" className="m-2 border-b border-gray-300" placeholder="0" onChange={(evento) => {setCantidad(evento.target.value)}}/ >
                <button className="w-fit px-4 py-2 bg-blue-200 rounded-md m-2" onClick={() => context.añadirProducto(producto.id, cant)}>Añadir</button>
                <BotonEliminar enCarrito={(producto.cantidadCarrito)}/ >
        </section>
    );
}
