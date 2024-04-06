import "./NewSubscription.css"
import FormSubscription from './FormSubscription';
import { useState } from "react";
const NewSubscription=(props)=>{
    const [showForm,setShowForm]=useState(false)
 const  onSaveHandler = (data) => {
        const subscriptionData={...data,id:Math.random().toString()}
        props.onAddSubscription(subscriptionData);
        console.log("on save", subscriptionData)
    }
    const showFormHandler=()=>{
        setShowForm(true)
        console.log('show form',showForm)
    }
    return <div className="new_subscription">
       {showForm && <FormSubscription onSave={onSaveHandler}/>} 
        <button type="button" onClick={showFormHandler}>Add New</button>
        </div>
        
    
}
export default NewSubscription