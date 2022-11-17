import { createContext, useEffect, useState } from 'react';
import { getProductos } from '../utils/axiosClient';

const firstProductos = async () => {
    const a = await getProductos()
    
    return a.map((producto) => ({
        ...producto,
        cantidadCarrito: 0
    }))
}

export const ProductoContext = createContext({
    productos: []
});

const ProductoContextProvider = ({children}) => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        (async () => {
            if (productos.length === 0) {
                const data = await firstProductos()
                setProductos(data)
            }
        })()
    }, [])

    const getById = (id) => {
        return productos.find(producto => producto.id === id)
    }

    const añadirProducto = (id, cant) => {
        let copia = [...productos]
        copia[id-1].cantidadCarrito = parseInt(productos[id-1].cantidadCarrito) + parseInt(cant)
        setProductos(copia)
    }

    const eliminarProducto = (id) => {
        const copia = [...productos]
        copia[id-1].cantidadCarrito = 0
        setProductos(copia)
    }

    return (
        <ProductoContext.Provider value={{ productos, eliminarProducto, añadirProducto, getById }}>{children}
        </ProductoContext.Provider>
    );
};

export default ProductoContextProvider;

export const useContext = () => useContext(ProductoContext);