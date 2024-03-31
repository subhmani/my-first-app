import "./NewSubscription.css"
import FormSubscription from './FormSubscription';
const NewSubscription=()=>{
    onSaveHandler=(data)=>{
        const subscriptionData={...data,id:Math.random().toString}
    }
    return <div className="new_subscription"><FormSubscription onSave={onSaveHandler}/></div>
    
}
export default NewSubscription