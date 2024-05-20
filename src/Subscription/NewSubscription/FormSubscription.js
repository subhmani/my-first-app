import { useState, useEffect, useReducer } from "react"
import "./NewSubscription.css"
import styled from 'styled-components';
import { type } from "@testing-library/user-event/dist/type";

/* const FormControl=styled.div`{
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 1rem;
    text-align: left;
}
&label{
    font-weight: bold;
    margin-bottom: 0.5rem;
    display: block;
    color:${props=>props.inValid?'red':'black'};
}
&input{
    font: inherit;
    padding: 0.5rem;
    border-radius: 6px;
    border: 1px solid ${props=>props.inValid?'red':'#ccc'};
    width: 20rem;
    max-width: 100%;
 
}
`; */
const formReducerFn = (latestState,action)=>{
    console.log('in form reducer fn',latestState, action)
    if(action.type === 'TITLE'){
        console.log('form function title block',latestState, action)
        return {...latestState,userTitle:action.val}
    }
    else if(action.type === 'DATE'){
        return{...latestState,userDate:action.val}
    }
    else if(action.type === 'AMOUNT'){
        return{...latestState,userAmount:action.val}
    }
    return {userTitle:'Enter Subscription Title',userDate:'',userAmount:'Enter Amount'}
}
const FormSubscription=(props)=>{
   /*  const [userTitle,setUserTitle]=useState("");
    const [userDate,setUserDate]=useState("");
    const [userAmount,setUserAmount]=useState(""); */
    const [myState,setMyState]=useReducer((latestStateValue,action)=>{
         return latestStateValue
    },'state',()=>{});
    const[formReducer,setFormReducer]=useReducer(formReducerFn,{userTitle:'Enter Subscription Title',userDate:'',userAmount:'Enter Amount'})
    //const [form,setform]=useState({userTitle:'Enter Subscription Title',userDate:'',userAmount:'Enter Amount'})
    const [isValid,setIsValid]=useState(true)
    const {userTitle: titleReducer} = formReducer
    useEffect(()=>{
       const timerId= setTimeout(() => {
            console.log('Using effect');
            if( titleReducer.trim().length>0){
                setIsValid (true);
               
            }
        }, 500);
       return ()=>{
        console.log('Clean Up Function');
        clearTimeout(timerId);
    }
        
    },[titleReducer])
    const titleChangeHandler = (events) =>{
        /* setUserTitle(events.target.value);
        setform({...form,userTitle:events.target.value})
        if( events.target.value.trim().length>0){
            setIsValid (true);
        } */
        setFormReducer({type:'TITLE',val:events.target.value})
        /* setform((prevState)=>{
            return {...prevState,userTitle:events.target.value}
    }) */
        
       // console.log("onTitleChange", events.target.value , userTitle);
    }
    const dateChangeHandler = (events)=>{
        //setform({...form,userDate:events.target.value})
        setFormReducer({type:'DATE',val:events.target.value})
       /*  setform((prevState)=>{
            return {...prevState,userDate:events.target.value}
    }) */
        //console.log(form)
        //setUserDate(events.target.value);
       // console.log("userDate",userDate)
    }
    const amountChangeHandler = (events)=>{
       // setform({...form,userAmount:events.target.value})
       setFormReducer({type:'AMOUNT',val:events.target.value})
       /*  setform((prevState)=>{
            return {...prevState,userAmount:events.target.value}
    }) */
        
       // setUserAmount(events.target.value);
        //console.log("userAmount",userAmount)
    }
    const submitHandler=(events)=>{
        events.preventDefault()
        if (formReducer.userTitle.trim().length===0){
            setIsValid(false);
            return
        }
        const Subscription={title:formReducer.userTitle,amount:formReducer.userAmount,date:new Date(formReducer.userDate)}
        props.onSave(Subscription);
        props.onCancel();
        console.log("on submit",Subscription)
    }
    return(
        <form onSubmit={submitHandler}>
            <div className="new_subscription_controls ">
               <div className={`new_subscription_control ${!isValid?'invalid':''}`}>
                   
                   {/*  style={{color:!isValid?'red':'black'}}
                   style={{borderColor:!isValid?'red':'black'}}
                    
                    <label >Title</label>
                    <input  type="text" value={form.userTitle} onChange={titleChangeHandler}></input>
                </div> */}
               {/*  <FormControl inValid={!isValid}> */}
                <label >Title</label>
                <input  type="text" value={titleReducer} onChange={titleChangeHandler}></input>
                {/* </FormControl> */}
                </div>
                <div className="new_subscription_control">
                    <label>Date</label>
                    <input type="date" value={formReducer.userDate} onChange={dateChangeHandler} ></input>
                </div>
                <div className="new_subscription_control">
                    <label>Amount</label>
                    <input type="text" value={formReducer.userAmount} onChange={amountChangeHandler} ></input>
                </div>

            </div>
            <div className="new_subscription_actions">
            <button className="danger" type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Save</button>

            </div>
        </form>   
    )

}
export default FormSubscription