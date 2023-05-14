import {useState} from 'react';
import { useMovieContext } from '../../../context/MovieContext';
import CardFilter from '../../CardFilter/CardFilter';

const FilterMovies = () => {

    const {data} = useMovieContext();

    const [buscar, setBuscar] = useState('');

    const handleChange = (ev) => {
        setBuscar(ev.target.value);
    };

    const filteredMovies = data.filter((movie) => movie.titulo.toLowerCase().includes(buscar.toLowerCase()))

    return(
        
        <div style={{textAlign:'center'}}>
            <h2 style={{marginTop:'20px',addingBottom:'15px',fontFamily:'Verdana, Geneva, Tahoma, sans-serif'}}>Escribi tu pelicula favorita en el buscador para ver mas detalles</h2>
            <div style={{paddingBottom:'50px'}}>
            <input placeholder='Escribe la pelicula que deseas buscar' style={{fontFamily:'Verdana, Geneva, Tahoma, sans-serif',fontSize:'11px',width:'300px',padding:'5px 40px'}} type='text' value={buscar} onChange={handleChange}/>
            </div>
            <div style={{display:'flex', flexDirection:'row',flexWrap:'wrap',justifyContent:'space-evenly'}}>
                {filteredMovies.map((movie) => (
                    <span key={movie.id}><CardFilter movie={movie}/></span>  
                ))}
            </div>
        </div>
    )
}

export default FilterMovies;