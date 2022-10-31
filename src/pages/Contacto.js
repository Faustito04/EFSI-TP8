import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Contacto() {
    return (
      <section className="mx-auto w-[95%] md:w-[750px]">
            <h2 className="text-2xl font-semibold mb-4">Contactanos</h2>
            <form>
            <p className="leading-tight"> Nombre: <input type="text" className="m-2 border-b border-gray-300" required/></p><br/>

            <p className="leading-tight">Mail: <input type="text" className="m-2 border-b border-gray-300" required/></p><br/>

            <p className="leading-tight">Asunto: <input type="text" className="m-2 border-b border-gray-300" required/></p><br/>

            <p className="leading-tight">Mensaje:<br/></p>
            <input type="text" className="m-2 border-b border-gray-300 mb-4" required/><br/>

            <Link to="/"><button class="w-fit px-4 py-2 bg-blue-200 rounded-md" >Añadir</button></Link>
              
            </form>
        </section>
    )
}

Contacto.propTypes = { //todo
  nombre: PropTypes.string,
  mail: PropTypes.string,
  asunto: PropTypes.string,
  mensaje: PropTypes.string
}

export default Contacto;
