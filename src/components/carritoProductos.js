import React from "react";
import { useContext} from "react";
import {ProductoContext} from "../helpers/productoContext"
import { Link } from "react-router-dom";
import Card from "./card";

export default function CarritoProductos({ title }) {
    const context = useContext(ProductoContext);
    

    return (
        <section className="mx-auto w-[95%] md:w-[750px]">
            <h2 className="text-2xl font-semibold mb-4">{title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:6 lg:8">
                {context.productos.map((producto, index) => <Card key={index} {...producto} href={`/producto/${producto.id}`} />)}
            </div>
            {cant < 10 && <Link to="/productos">Ver mas</Link>}
        </section>
    );
}
