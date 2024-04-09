import './Chart.css';
const Chart=(props)=>{
    return (
    <div className='chart'>
        {props.dataSets.map((data)=>{<Chartbar 
        value={data.value} 
        label={data.label} 
        key={data.label} 
        maxValue={null}/>})}

    </div>
    )
}
export default Chart