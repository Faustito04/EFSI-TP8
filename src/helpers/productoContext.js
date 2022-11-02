import { createContext, useState } from 'react';
import { getProductos } from '../utils/axiosClient';

export const ProductoContext = createContext({
    productos: []
});

const ProductoContextProvider = ({children}) => {
    const [productos, setProductos] = useState([]);

    const firstProductos = async () => {
        let a = await getProductos()
        setProductos(a.map((producto) => ({
            ...producto,
            cantidadCarrito: 0
        })))
        
        return productos;
    }

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
        <ProductoContext.Provider value={{ productos, eliminarProducto, añadirProducto, firstProductos, getById }}>{children}
        </ProductoContext.Provider>
    );
};

export default ProductoContextProvider;

export const useContext = () => useContext(ProductoContext);