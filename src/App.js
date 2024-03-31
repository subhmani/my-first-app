import logo from './logo.svg';
import './App.css';
import Subscription from './Subscription/Subscription';
import Container from './templates/Container';
import React, { useState } from 'react';
import Filter from './Subscription/NewSubscription/Filter';
import NewSubscription from './Subscription/NewSubscription/NewSubscription';
import { eventWrapper } from '@testing-library/user-event/dist/utils';

 const App = () => {
  let subscriptions=[
    {
      id:"1",
      date:(new Date('2024','03','23')),
      title:"Monthly Subscription",
      amount:"125.60"
    },
    {
      id:"2",
      date:(new Date('2024','06','28')),
      title:"Annual Subscription",
      amount:"1125.00"
    },
    {
      id:"3",
      date:(new Date('2024','09','05')),
      title:"Quarterly Subscription",
      amount:"425.50"
    }
]
const [filteredData,setFilteredData]=useState('2021');
    /* let date=(new Date('2024','03','26'));
    let title="Monthly Subscription";
    let amount='125.60'; */
    const addSubscriptionHandler=(data)=>{
      subscriptions.push(data)
      console.log("on add Subscription",data)
    }
    const filterChangeHandler=(data)=>{
      setFilteredData(data);
      console.log('filter change handler',data)
    }
  return (
    // React.createElement('div',{},React.createElement('h2',{},'Lets start!!'))
    
    <Container>
    <NewSubscription onAddSubscription={addSubscriptionHandler}/>
    <Filter onFilterChange={filterChangeHandler} selectedFilter={filteredData}/>
    {subscriptions.map(subscription =><Subscription date={subscription.date} title={subscription.title} amount={subscription.amount}/>)}
    
    {/* <Subscription date={subscriptions[0].date} title={subscriptions[0].title} amount={subscriptions[0].amount}/>
    <Subscription date={subscriptions[1].date} title={subscriptions[1].title} amount={subscriptions[1].amount}/>
    <Subscription date={subscriptions[2].date} title={subscriptions[2].title} amount={subscriptions[2].amount}/>
 */}
    </Container>
  );
}

export default App;
