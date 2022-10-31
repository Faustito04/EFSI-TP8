import { Link } from "react-router-dom";

export default function Card(props) {
    return (
        <div className="text-center p-2 border-2 border-[#71a7ab] hover:bg-[#71a7ab] hover:cursor-pointer rounded-sm transition">
            <Link to={props.href}>
                <img className="w-full h-24" src={props.thumbnail} alt="" />
                <h3 className="text-lg font-bold pt-1 leading-tight">{props.title}</h3>
                <p className="leading-tight">{props.description}</p>
            </Link>
                <input type="text" className="m-2 border-b border-gray-300" placeholder="0"></input>
                <button className="w-fit px-4 py-2 bg-blue-200 rounded-md" onClick="añadir_carrito" >Añadir</button>
        </div>
    )
}

//todo