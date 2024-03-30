import { useState } from "react"
import "./NewSubscription.css"
const FormSubscription=()=>{
   /*  const [userTitle,setUserTitle]=useState("");
    const [userDate,setUserDate]=useState("");
    const [userAmount,setUserAmount]=useState(""); */
    const [form,setform]=useState({userTitle:'',userDate:'',userAmount:''})
    const titleChangeHandler = (events) =>{
        //setUserTitle(events.target.value);
        //setform({...form,userTitle:events.target.value})
        setform((prevState)=>{
            return {...prevState,userTitle:events.target.value}
    })
        console.log(form)
       // console.log("onTitleChange", events.target.value , userTitle);
    }
    const dateChangeHandler = (events)=>{
        //setform({...form,userDate:events.target.value})
        setform((prevState)=>{
            return {...prevState,userDate:events.target.value}
    })
        console.log(form)
        //setUserDate(events.target.value);
       // console.log("userDate",userDate)
    }
    const amountChangeHandler = (events)=>{
       // setform({...form,userAmount:events.target.value})
        setform((prevState)=>{
            return {...prevState,userAmount:events.target.value}
    })
        console.log(form)
       // setUserAmount(events.target.value);
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