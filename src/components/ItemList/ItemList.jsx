import Item from '../Item/Item';

const ItemList = ({data}) => {
    return(
        <div>
            <Item data={data}/>
        </div>
    )
}

export default ItemList;