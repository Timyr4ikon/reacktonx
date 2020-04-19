import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Profile} from './components/Profile/Profile';
import {StatisticPanel} from './components/Statistic/Statistic';
import {FriendList} from './components/FriendList/FriendList';
import profile from './components/db/stats.json'
import statisticalData from './components/db/statistic.json';
import { FriendItem } from './components/FriendListItem/FriendListItem';
import {TransactionHistory} from './components/TransactionHistory/TransactionHistory';
import friends from './components/db/friends.json';



ReactDOM.render(
<>
  <Profile 
  imgUrl={profile.imgUrl}
  name={profile.name}
  tag={profile.tag}
  location={profile.location}
  followers={profile.stats.followers}
  views={profile.stats.views}
  likes={profile.stats.likes}
  />
  <StatisticPanel title="Upload stats" stats={statisticalData}/>
  <FriendList friends={friends}/>
  <TransactionHistory/>
</>
  ,document.getElementById('root')
);

