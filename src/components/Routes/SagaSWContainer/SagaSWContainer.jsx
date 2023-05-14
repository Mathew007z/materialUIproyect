import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import SagaSW from "../../Sagas/SagaSW/SagaSW";

const SagaSWContainer = () => {

    const [dataSS,setDataSS] = useState([]);
    const { categoriaId } = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'sagaSW')

        if(categoriaId){
            const queryFilter = query(queryCollection, where('categoria', '==', categoriaId))
            getDocs(queryFilter)
            .then(res => setDataSS(res.docs.map(data => ({id:data.id, ...data.data()}))))
        }else{
            getDocs(queryCollection)
            .then(res => setDataSS(res.docs.map(data => ({id: data.id, ...data.data()}))))
        }
    },[categoriaId])
    
    return <SagaSW dataSS={dataSS}/>
}

export default SagaSWContainer;