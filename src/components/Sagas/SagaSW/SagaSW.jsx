import SagaSWCard from "../SagaSWCard/SagaSWCard";


const SagaSW = ({dataSS}) => {
    
    return(
        <div style={{display:'flex', flexDirection:'row',flexWrap:'wrap',justifyContent:'space-evenly'}}>
            {dataSS.map((dataSS) => (
                <SagaSWCard dataSS={dataSS} key={dataSS.id}/>
            ))}
        </div>
    )
}

export default SagaSW;