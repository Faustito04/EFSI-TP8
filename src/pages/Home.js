import Productos from "../components/productos";
import Carousel from "../components/carousel";
import Marcas from "../components/marcas";

function Home() {
  return (
    <div> 
      <Carousel images={["../img/slider.png", "../img/slider.png", "../img/slider.png"]} />
      <Productos cant={6} title={"Productos Destacados"} />
      <Marcas />
    </div>
  );
}

export default Home;
