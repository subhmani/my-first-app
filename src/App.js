import logo from './logo.svg';
import './App.css';
import Subscription from './Subscription/Subscription';
import Container from './templates/Container';
import React, { useState, useEffect, useCallback } from 'react';
import Filter from './Subscription/NewSubscription/Filter';
import NewSubscription from './Subscription/NewSubscription/NewSubscription';
import { eventWrapper } from '@testing-library/user-event/dist/utils';
import SubscriptionList from './Subscription/NewSubscription/SubscriptionList';
import SubscriptionChart from './Subscription/NewSubscription/SubscriptionChart';
import SubscriptionsContext from './store/subscriptions-context';
import useTime from './hooks/time';

const INITIAL_SUBSCRIPTION=[
  /* {
  id:"1",
  date:(new Date('2024','03','23')),
  title:"Monthly Subscription",
  amount:"125.60"
},
{
  id:"2",
  date:(new Date('2022','06','28')),
  title:"Annual Subscription",
  amount:"1125.00"
},
{
  id:"3",
  date:(new Date('2021','09','05')),
  title:"Quarterly Subscription",
  amount:"425.50"
} */
]
 const App = () => {
  const [subscriptions,setSubscriptions]=useState(INITIAL_SUBSCRIPTION)
const [filteredYear,setFilteredYear]=useState('2021');
const[isLoading,setIsLoading]=useState(false);
const[error,setError]=useState('');
//const[CurrentTime, setCurrentTime]=useState('');
useEffect(()=>{
  if(localStorage.getItem('filteredYear')){
    setFilteredYear(localStorage.getItem('filteredYear'))
    console.log('in useEffect',localStorage.getItem('filteredYear'))
  }
  /* const interval=setInterval(()=>{
    setCurrentTime(new Date().toLocaleString())
  },1000)
  return ()=>clearInterval(interval) */
},[]);
const CurrentTime =useTime();


    /* let date=(new Date('2024','03','26'));
    let title="Monthly Subscription";
    let amount='125.60'; */
    const addSubscriptionHandler=async(data)=>{
     // subscriptions.push(data);
     try{
      setIsLoading(true)
      setSubscriptions(prevState=>{return[data,...subscriptions]})
      const postresponse = await fetch('https://react-workspace-5cb68-default-rtdb.firebaseio.com/subscription.json',
      {
        method:'POST',
        body:JSON.stringify(data),
        headers:{'content-type':'application/json'}
      })
      setIsLoading(false)
      const dataStored=await postresponse.json()
      console.log("on add Subscription",dataStored)
    }
    catch(error){
      setError(error.message);
      setIsLoading(false);
    }
    }
    const filterChangeHandler=(data)=>{
      setFilteredYear(data);
      localStorage.setItem('filteredYear',data)
      
      console.log('filter change handler',data)
    }
    const filteredSubscriptions=subscriptions.filter((item)=>{
      return new Date (item.date).getFullYear().toString()===filteredYear
    })
    
    /* const fetchListHandler=async()=>{
      try{
      const response = await fetch('https://react-workspace-5cb68-default-rtdb.firebaseio.com')
      if(!response.ok)
        {throw new Error('Somthing went worng')}
      const data = await response.json
      const transformsData = data.toString()
      }catch(error){
        setError(error.message);
        console.log('Error catched', error.message)
      }
     
      
    } */
    
    const fetchListHandler=useCallback(()=>{
      setIsLoading(true);
     fetch('https://react-workspace-5cb68-default-rtdb.firebaseio.com/subscription.json').then(
        (response)=>{
          console.log('fatched data', response,response.json)
          return response.json()
        }).then((data)=>{
          //transform
        let  fetchedSubscriptions=[] 
          for(let key in data){
            //console.log('value for',key,data[key])
            fetchedSubscriptions.push(data[key])
          }
          console.log('transformed data', fetchedSubscriptions);
          setSubscriptions(fetchedSubscriptions);
          setIsLoading(false);
        }).catch((error)=>{
          setError(error.message);
          console.log('Error catched', error.message);
          setIsLoading(false)
        }
      );
      
    })
    useEffect(()=>{
      fetchListHandler();
    },[fetchListHandler])

   /*  let content=<h3>No Data found</h3>;
    if (filteredSubscriptions.length !==0){
      content=filteredSubscriptions.map(subscription =>
        <Subscription key={subscription.id} date={subscription.date} 
        title={subscription.title} amount={subscription.amount}/>)
    } */
  return (
    // React.createElement('div',{},React.createElement('h2',{},'Lets start!!'))
    <SubscriptionsContext.Provider value={{subscriptionList:[],dummy:filterChangeHandler}}>
    <Container>
    <button type='button' onClick={fetchListHandler}>Fatch List</button>
    <span className='current-time'>{CurrentTime}</span>
    <NewSubscription onAddSubscription={addSubscriptionHandler}/>
    <Filter onFilterChange={filterChangeHandler} selectedFilter={filteredYear}/>
    
    {/* <SubscriptionChart filteredSubscriptions = {filteredSubscriptions}/> */}
    {!isLoading && !error && filteredSubscriptions.length>0 && <SubscriptionList subscription={filteredSubscriptions}/>}
    {!isLoading && filteredSubscriptions.length===0 && <p className='list_no_data'>No Data Found</p>}
    {isLoading && <p>Please Wait...</p>}
    {!isLoading && error && <p>error.message</p>}
    {/* {filteredSubscriptions.length===0 && <h3>No Data Found</h3>}
    {filteredSubscriptions.length !== 0 && 
    filteredSubscriptions.map(subscription =>
      <Subscription key={subscription.id} date={subscription.date} 
      title={subscription.title} amount={subscription.amount}/>)} */}

    {/* {filteredSubscriptions.length===0? <h3>No data found</h3>:
    filteredSubscriptions.map(subscription =>
    <Subscription key={subscription.id} date={subscription.date} 
    title={subscription.title} amount={subscription.amount}/>)} */}
  
    {/* {filteredSubscriptions.map(subscription =><Subscription key={subscription.id} date={subscription.date} title={subscription.title} amount={subscription.amount}/>)}
     */}
    {/* <Subscription date={subscriptions[0].date} title={subscriptions[0].title} amount={subscriptions[0].amount}/>
    <Subscription date={subscriptions[1].date} title={subscriptions[1].title} amount={subscriptions[1].amount}/>
    <Subscription date={subscriptions[2].date} title={subscriptions[2].title} amount={subscriptions[2].amount}/>
 */}
 
    </Container>
    </SubscriptionsContext.Provider>
  );
}

export default App;
