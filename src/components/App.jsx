import React from 'react';
import './main.css'
import user from '../jsons/user.json';
import data from '../jsons/data.json';
import friends from '../jsons/friends.json'
import transactions from '../jsons/transactions.json'
import Profile from './Profile/Profile'
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory'

export const App = () => {
  return(
  <div className='wraper'>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
      />
    <Statistics
        title='Upload stats' 
        stats={data}
      />
    <FriendList
       friends={friends}
      />
    <TransactionHistory
        items={transactions}
      />
  </div>
  )
};