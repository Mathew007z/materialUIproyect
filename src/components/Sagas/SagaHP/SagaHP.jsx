import SagaHPCard from "../SagaHPCard/SagaHPCard"



const SagaHP = ({dataSS}) => {
    
    return(
        <div style={{display:'flex', flexDirection:'row',flexWrap:'wrap',justifyContent:'space-evenly'}}>
            {dataSS.map((dataSS) => (
                <SagaHPCard dataSS={dataSS} key={dataSS.id}/>
            ))}
        </div>
    )
}

export default SagaHP