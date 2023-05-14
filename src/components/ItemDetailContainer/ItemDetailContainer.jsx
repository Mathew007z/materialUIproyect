import ItemDetail from '../ItemDetail/ItemDetail';
import { useDetailContext } from '../../context/DetailContext';

const ItemDetailContainer = () => {

    const {detail} = useDetailContext();


    return <ItemDetail detail={detail}/>
}

export default ItemDetailContainer; 