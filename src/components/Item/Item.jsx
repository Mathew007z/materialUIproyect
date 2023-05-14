import Card from '../Card/Card';

const Item = ({data}) => {
    return(
        <>
            <Card data={data}/>
            <button>Ver más</button>
        </>
    )
}

export default Item;