import { useMovieContext } from "../../context/MovieContext";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {

    const { data } = useMovieContext();

    return(
        <div>
            {data.map((data) => (
                <ItemList data={data} key={data.id}/>
            ))}
        </div>
    )
}

export default ItemListContainer;