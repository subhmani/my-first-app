import Container from './Container'
import './Subscription.css'
import SubscriptionDate from './SubscriptionDate'
function Subscription(props){
   return(
    <Container className='subscription'>
        <SubscriptionDate date={props.date}/>
        <h2 className='subscription_title'>{props.title}</h2>
        <div className='subscription_price'>{props.amount}</div>
    </Container>
    )
}
export default Subscription