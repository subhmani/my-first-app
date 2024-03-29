import "./NewSubscription.css"
const FormSubscription=()=>{
    const titleChangeHandler = (events) =>{
        console.log("onTitleChange",events,events.value,events.target);
    }
    const dateChangeHandler = (events)=>{
        
    }
    const amountChangeHandler = (events)=>{
        
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