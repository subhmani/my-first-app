import Container from '../templates/Container'
import './Subscription.css'
import SubscriptionDate from './SubscriptionDate'
import React, { useState } from 'react';
const Subscription = (props) => {
    const [title,setTitle] = useState(props.title)
    const onClickHandler=()=>{
  //  title="Change Title"
    setTitle("Change Title")
    console.log("On Button Clicked",title)
}
   return(
    <Container className='subscription'>
        <SubscriptionDate date={props.date}/>
        <h2 className='subscription_title'>{title}</h2>
        <div className='subscription_price'>{props.amount}</div>
        <button type='button' id='changeTitleButton'onClick={onClickHandler}>Change Title</button>
    </Container>
    )
}
export default Subscription