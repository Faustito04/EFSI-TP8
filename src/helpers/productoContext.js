import { createContext, useState } from 'react';
import { getProductos } from '../utils/axiosClient';

const firstProductos = async () => {
    const a = await getProductos()
    console.log("a")
    
    return a.map((producto) => ({
        ...producto,
        cantidadCarrito: 0
    }))
}

export const ProductoContext = createContext({
    productos: firstProductos()
});

const ProductoContextProvider = ({children}) => {
    const [productos, setProductos] = useState([]);

    const getById = (id) => {
        return productos.find(producto => producto.id === id)
    }

    const añadirProducto = (id, cant) => {
        const index = productos.indexOf(producto => producto.id === id)
        const copiaProductos = [...productos]
        copiaProductos[index].cantidadCarrito += cant
        setProductos(copiaProductos)
    }

    const eliminarProducto = (id) => {
        const index = productos.indexOf(producto => producto.id === id)
        const copiaProductos = [...productos]
        copiaProductos[index].cantidadCarrito = 0
        setProductos(copiaProductos)
    }

    return (
        <ProductoContext.Provider value={{ productos, eliminarProducto, añadirProducto, getById }}>{children}
        </ProductoContext.Provider>
    );
};

export default ProductoContextProvider;

export const useContext = () => useContext(ProductoContext);