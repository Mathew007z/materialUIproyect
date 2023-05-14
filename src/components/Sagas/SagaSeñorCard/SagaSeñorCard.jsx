import '../../../css/cardFilter.css'

const SagaSeñorCard = ({dataSS}) => {

    return(
        <div className='containerCard' style={{display:'flex',flexDirection:'column',justifyContent:'space-evenly'}}>
            <h1 className="h1CardFilter">{dataSS.titulo}</h1>
            <img className="imgCardFilter" src={dataSS.imagen} alt='foto-portada'/>
            <button className='btnCardFilter'>Ver Mas</button>
        </div>
    )
}

export default SagaSeñorCard;