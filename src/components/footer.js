export default function Footer() {
    return (
        <footer className="flex justify-between items-center bg-gray-800 text-white mt-10 sm:px-10 md:px-20 lg:px-40 py-4">
            <img className="w-24" src="/img/logo_byn.png" alt="logo" />
            <div className="flex flex-col">
                <p>Beiro 3300 - Villa del Parque</p>
                <p>contacto@sanitorioscampana.com.ar</p>
            </div>
            <div className="flex items-center gap-4 text-blue-400 font-semibold">
                <img src="/img/tel.png" alt="telefono" />
                <p>4503-6015</p>
            </div>
        </footer>
    )
}