import React from "react";
import { useContext} from "react";
import {ProductoContext} from "../helpers/productoContext"
import Card from "./card";

export default function CarritoProductos({ title }) {
    const context = useContext(ProductoContext);
    const copia = context.productos.filter( e => e.cantidadCarrito > 0)
    let totalGastado = 0
    copia.forEach(producto => {
        totalGastado += producto.price * producto.cantidadCarrito
    });

    return (
        <section className="mx-auto w-[95%] md:w-[750px]">
            <h2 className="text-xl font-semibold mb-4">Total Gastado: ${totalGastado}</h2>
            <h2 className="text-2xl font-semibold mb-4">{title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:6 lg:8">
                {copia.map((producto, index) => <Card key={index} {...producto} href={`/producto/${producto.id}`} />)}
            </div>
        </section>
    );
}
