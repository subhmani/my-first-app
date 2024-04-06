import './SubscriptionList.css';
import Subscription from '../Subscription';
const SubscriptionList=(props)=>{
if (props.subscription.length == 0){return <h3 className='list_no_data'>No Data Found</h3>}
return(
    <ul className='list'>
    {props.subscription.map(subscription =>
    <Subscription key={subscription.id} date={subscription.date} 
    title={subscription.title} amount={subscription.amount}/>)}
    </ul>
)
}
export default SubscriptionList;