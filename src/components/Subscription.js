import './Subscription.css'
function Subscription(props){
    const month=props.date.toLocaleString('default',{month:'long'});
    const day=props.date.toLocaleString('default',{day:'2-digit'});
    const year=props.date.getFullYear();
    return(
    <div className='subscription'>
        <div> {month} </div>
        <div> {day} </div>
        <div> {year} </div>
        <h2 className='subscription_title'>{props.title}</h2>
        <div className='subscription_price'>{props.amount}</div>
    </div>
    )
}
export default Subscription