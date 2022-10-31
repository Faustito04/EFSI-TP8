// import { getProductos } from "../utils/axiosClient";
// import { createContext, useContext } from "react";

// export const initialState = {
//     productos: getProductos,
//     carrito: []
// }

// export const initialContext = {
//     contextState: initialState,
//     setContextState: () => {}
// }

// export const ContextProvider = ({ children }) => {
//     return (
//         <Cont.Provider value={{ contextState, setContextState }}>{children}</Cont.Provider>
//     )
// }

// const Cont = createContext<{ contextState, setContextState }>(initialContext);

// export const useContextState = () => useContext(Cont);


import { createContext, useState } from 'react';
import { getProductos } from '../utils/axiosClient';

export const Context = createContext({
    productos: [],
    carrito: []
});

const ContextProvider = () => {
    const [carrito, setCarrito] = useState();
    const [productos, setProductos] = useState();

    const newProductos = async () => {
        setProductos(getProductos())
        return productos;
    }

    const añadirProducto = async (id, cant) => {

    }

    const eliminarProducto = async (id) => {

    }

    return (
        <Context.Provider value={{ productos, carrito, eliminarProducto, añadirProducto, newProductos }}>
        </Context.Provider>
    );
};

export default ContextProvider;

export const useContext = () => useContext(Context);