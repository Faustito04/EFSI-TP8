import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Contacto() {

    return (
      <section className="mx-auto w-[95%] md:w-[750px]">
            <h2 className="text-2xl font-semibold mb-4">Contactanos</h2>
            <form action="/">
              <p className="leading-tight"> Nombre: <input type="text" className="m-2 border-b border-gray-300" minLength="5" maxLength="20" required/></p><br/>

              <p className="leading-tight">Mail: <input type="text" className="m-2 border-b border-gray-300" required/></p><br/>

              <p className="leading-tight">Mensaje:<br/></p>
              <input type="text" className="m-2 border-b border-gray-300 mb-4" maxLength="40" required/><br/>

              <button className="w-fit px-4 py-2 bg-blue-200 rounded-md" maxLength="255"><Link to="home">Enviar</Link></button>
              
            </form>
        </section>
    )
}

Contacto.propTypes = { 
  nombre: PropTypes.string,
  mail: PropTypes.string,
  asunto: PropTypes.string,
  mensaje: PropTypes.string
}//chequear

export default Contacto;
//el link es temporal, hay que hacer bien el form