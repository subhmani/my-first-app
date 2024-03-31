import { useState } from "react"
import "./NewSubscription.css"
const FormSubscription=()=>{
   /*  const [userTitle,setUserTitle]=useState("");
    const [userDate,setUserDate]=useState("");
    const [userAmount,setUserAmount]=useState(""); */
    const [form,setform]=useState({userTitle:'Enter Subscription Title',userDate:'',userAmount:'Enter Amount'})
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
    const submitHandler=(events)=>{
        events.preventDefault()
        const Subscription={title:form.userTitle,amount:form.userAmount,date:new Date(form.userDate)}
        console.log("on submit",Subscription)
    }
    return(
        <form onSubmit={submitHandler}>
            <div className="new_subscription_controls">
                <div className="new_subscription_control">
                    <label>Title</label>
                    <input type="text" value={form.userTitle} onChange={titleChangeHandler}></input>
                </div>
                <div className="new_subscription_control">
                    <label>Date</label>
                    <input type="date" value={form.userDate} onChange={dateChangeHandler} ></input>
                </div>
                <div className="new_subscription_control">
                    <label>Amount</label>
                    <input type="text" value={form.userAmount} onChange={amountChangeHandler} ></input>
                </div>

            </div>
            <div className="new_subscription_actions">
                <button type="submit">Add Subscription</button>

            </div>
        </form>   
    )

}
export default FormSubscription