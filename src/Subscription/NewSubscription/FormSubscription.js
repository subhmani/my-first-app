import { useState } from "react"
import "./NewSubscription.css"
const FormSubscription=()=>{
    const [userTitle,setUserTitle]=useState("");
    const [userDate,setUserDate]=useState("");
    const [userAmount,setUserAmount]=useState("");
    const titleChangeHandler = (events) =>{
        setUserTitle(events.target.value);
       // console.log("onTitleChange", events.target.value , userTitle);
    }
    const dateChangeHandler = (events)=>{
        setUserDate(events.target.value);
       // console.log("userDate",userDate)
    }
    const amountChangeHandler = (events)=>{
        setUserAmount(events.target.value);
        //console.log("userAmount",userAmount)
    }
    return(
        <form>
            <div className="new_subscription_controls">
                <div className="new_subscription_control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} placeholder="Enter here"></input>
                </div>
                <div className="new_subscription_control">
                    <label>Date</label>
                    <input type="date" onChange={dateChangeHandler} placeholder="Enter here"></input>
                </div>
                <div className="new_subscription_control">
                    <label>Amount</label>
                    <input type="text" onChange={amountChangeHandler} placeholder="Enter here"></input>
                </div>

            </div>
            <div className="new_subscription_actions">
                <button type="submit">Add Subscription</button>

            </div>
        </form>
    )

}
export default FormSubscription