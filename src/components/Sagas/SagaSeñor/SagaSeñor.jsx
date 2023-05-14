import SagaSeñorCard from "../SagaSeñorCard/SagaSeñorCard";


const SagaSeñor = ({dataSS}) => {
    
    return(
        <div style={{display:'flex', flexDirection:'row',flexWrap:'wrap',justifyContent:'space-evenly'}}>
            {dataSS.map((dataSS) => (
                <SagaSeñorCard dataSS={dataSS} key={dataSS.id}/>
            ))}
        </div>
    )
}

export default SagaSeñor;