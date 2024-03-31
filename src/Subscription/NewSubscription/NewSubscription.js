import "./NewSubscription.css"
import FormSubscription from './FormSubscription';
const NewSubscription=(props)=>{
 const  onSaveHandler = (data) => {
        const subscriptionData={...data,id:Math.random().toString()}
        props.onAddSubscription(subscriptionData);
        console.log("on save", subscriptionData)
    }
    return <div className="new_subscription"><FormSubscription onSave={onSaveHandler}/></div>
    
}
export default NewSubscription