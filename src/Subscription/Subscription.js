import Container from '../templates/Container'
import './Subscription.css'
import SubscriptionDate from './SubscriptionDate'
import React, { Component, useState } from 'react';


class Subscription extends Component{
    constructor(){
        super();
        this.state={
        title:'',
        updateTitle:true    
        }        
    }
    componentDidMount(){
        console.log('In Component Did Mount')
    }
    componentDidUpdate(prevProp,prevState){
        if(prevState.updateTitle!==this.state.updateTitle){
            console.log('In component did update')
        }
    }
    componentWillUnmount(){
        console.log('In component will unmount')
    }
    onClickHandler(){

        this.setState({title:'Changed title',updateTitle:false})
        
       // setTitle("Change Title")
        console.log("On Button Clicked",this.state.title)
    }
    render(){
       return <Container className='subscription'>
        <SubscriptionDate date={this.props.date}/>
      {/*   <h2 className='subscription_title'>{title}</h2> */}
      <h2 className="subscription_title">{this.state.title}</h2>
        <div className='subscription_price'>{this.props.amount}</div>
        <button type='button' id='changeTitleButton'onClick={this.onClickHandler.bind(this)}>Change Title</button>
    </Container>
    }
}

/* const Subscription = (props) => {
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
} */
export default Subscription