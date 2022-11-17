import CarritoProductos from "../components/carritoProductos";

function Carrito() {
    return (
      <section className="mx-auto w-[95%] md:w-[750px]">
            <h2 className="text-2xl font-semibold mb-4">Carrito</h2>
            <CarritoProductos cant={30} title="Productos" />
        </section>
    )
}

export default Carrito;
