import Productos from "../components/productos";

function Home() {
  return (
    <section className="mx-auto w-[95%] md:w-[750px]">
        <Productos cant={30} title="Productos" />
    </section>
  );
}

export default Home;
