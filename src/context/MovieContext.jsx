import React, { useContext,useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';

//Creo el contexto
const MovieContext = React.createContext([])

//Creo hook para inicializar nuestro contexto 
export const useMovieContext = () => useContext(MovieContext);

//Crear el provider 
const MovieProvider = ({children}) => {

    const [data,setData] = useState([])
    const {categoriaId} = useParams()

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'items')
        
        if(categoriaId){
            const queryFilter = query(queryCollection, where('categoria', '==', categoriaId))
            getDocs(queryFilter)
            .then(res => setData(res.docs.map(data => ({id:data.id, ...data.data()}))))
        }else{
            getDocs(queryCollection)
            .then(res => setData(res.docs.map(data => ({id:data.id, ...data.data()}))))
        }
    },[categoriaId]);

    return(
        <MovieContext.Provider value={{data}}>
            {children}
        </MovieContext.Provider>
    )
}

export default MovieProvider;