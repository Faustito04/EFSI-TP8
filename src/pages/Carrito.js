import Productos from "./Productos"

function Carrito() {
    return (
      <section className="mx-auto w-[95%] md:w-[750px]">
            <h2 className="text-2xl font-semibold mb-4">Carrito</h2>
            <h2 className="text-xl font-semibold mb-4">Total Gastado: ${}</h2>
            <Productos cant={30} title="Productos" />
        </section>
    )
}

export default Carrito;
//traer carrito del context state y mostrar precio total