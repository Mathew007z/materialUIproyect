import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import SagaSeñor from "../../Sagas/SagaSeñor/SagaSeñor";

const SagaSeñorContainer = () => {

    const [dataSS,setDataSS] = useState([]);
    const { categoriaId } = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'sagaESDLA')

        if(categoriaId){
            const queryFilter = query(queryCollection, where('categoria', '==', categoriaId))
            getDocs(queryFilter)
            .then(res => setDataSS(res.docs.map(data => ({id:data.id, ...data.data()}))))
        }else{
            getDocs(queryCollection)
            .then(res => setDataSS(res.docs.map(data => ({id: data.id, ...data.data()}))))
        }
    },[categoriaId])
    
    return <SagaSeñor dataSS={dataSS}/>
}

export default SagaSeñorContainer;