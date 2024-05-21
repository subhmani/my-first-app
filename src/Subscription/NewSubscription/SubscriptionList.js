import './SubscriptionList.css';
import Subscription from '../Subscription';
import SubscriptionsContext from '../../store/subscriptions-context';
import { useContext } from 'react';
const SubscriptionList=(props)=>{
if (props.subscription.length === 0){return <h3 className='list_no_data'>No Data Found</h3>}
const ctx = useContext(SubscriptionsContext)
return(
    /* <SubscriptionsContext.Consumer>
        {(ctx)=>{
            <ul className='list'>
            {ctx.subscriptionList.map(subscription =>
            <Subscription key={subscription.id} date={subscription.date} 
            title={subscription.title} amount={subscription.amount}/>)}
            </ul>
        }}
    
    </SubscriptionsContext.Consumer> */
    <ul className='list'>
    {ctx.subscriptionList.map(subscription =>
    <Subscription key={subscription.id} date={subscription.date} 
    title={subscription.title} amount={subscription.amount}/>)}
    </ul>
)
}
export default SubscriptionList;