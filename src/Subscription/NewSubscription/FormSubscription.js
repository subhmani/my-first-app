import "./FormSubscription.css"
const FormSubscription=()=>{
    return(
        <form>
            <div className="new_subscription_controls">
                <div className="new_subscription_control">
                    <label>Title</label>
                    <input type="text"></input>
                </div>
                <div className="new_subscription_control">
                    <label>Date</label>
                    <input type="date"></input>
                </div>
                <div className="new_subscription_control">
                    <label>Amount</label>
                    <input type="text"></input>
                </div>

            </div>
            <div className="new_subscription_actions">
                <button type="submit">Add Subscription</button>

            </div>
        </form>
    )

}
export default FormSubscription