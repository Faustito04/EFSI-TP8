import { createContext, useState } from 'react';
import { getProductos } from '../utils/axiosClient';

export const Context = createContext({
    productos: [],
    carrito: [],
    forms: []
});

const ContextProvider = () => {
    const [carrito, setCarrito] = useState();
    const [productos, setProductos] = useState();

    const newProductos = async () => {
        setProductos(getProductos())
        return productos;
    }

    const getById = async (id) => {
        //let item = productos
    }

    const añadirProducto = async (item, cant) => {
        setCarrito(carrito.push(...item, cant))
    }

    const eliminarProducto = async (id) => {

    }

    return (
        <Context.Provider value={{ productos, carrito, eliminarProducto, añadirProducto, newProductos, getById }}>
        </Context.Provider>
    );
};

export default ContextProvider;

export const useContext = () => useContext(Context);
//todo