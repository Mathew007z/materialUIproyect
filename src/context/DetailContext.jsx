import React, {useState,useEffect,useContext} from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, getDoc, doc } from 'firebase/firestore';

const DetailContext = React.createContext([]);

export const useDetailContext = () => useContext(DetailContext);

const DetailProvider = ({children}) => {

    const [detail,setDetail] = useState([]);

    const { idDetail } = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'items', idDetail)
        getDoc(queryDoc)
        .then(res => setDetail({id:res.id, ...res.data()}))
    },[idDetail])

    return(
        <DetailContext.Provider value={{detail}}>
            {children}
        </DetailContext.Provider>
    )
}

export default DetailProvider;