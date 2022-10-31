import { Link } from "react-router-dom";

export default function Card(props) {
    //let item = 0
    let enCarrito = true

    return (
        <div className="text-center p-2 border-2 border-[#71a7ab] hover:bg-[#71a7ab] hover:cursor-pointer rounded-sm transition">
            <div className="rounded-full text-center bg-green-500 mb-1 hidden">En Carrito</div>
            <Link to={props.href}>
                <img className="w-full" src={props.thumbnail} alt="" />
                <h3 className="text-lg font-bold pt-1 leading-tight">{props.title}</h3>
                <p className="leading-tight">{props.description}</p>
            </Link>
                <input type="text" className="m-2 border-b border-gray-300" placeholder="0"></input>
                <button className="w-fit px-4 py-2 bg-blue-200 rounded-md" >Añadir</button>
                <button className="w-fit px-4 py-2 bg-blue-200 rounded-md">Eliminar</button>
        </div>
    )
}

//botones y chequear si ya esta en el carrito el item
//onClick="añadir_carrito"
//onClick="eliminar_carrito"