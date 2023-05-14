import '../../css/listaRedes.css'

const ListaRedes = () => {
    return(
        <>
            <ul style={{display:"flex",justifyContent:'space-between',width:'200px'}}>
                <li className='listaRedes'><i className="fa-brands fa-facebook"></i></li>
                <li className='listaRedes'><i className="fa-brands fa-instagram"></i></li>
                <li className='listaRedes'><i className="fa-brands fa-whatsapp"></i></li>
                <li className='listaRedes'><i className="fa-brands fa-twitter"></i></li>
            </ul>
        </>
    )
}

export default ListaRedes;