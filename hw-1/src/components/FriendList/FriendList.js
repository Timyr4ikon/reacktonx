import React from 'react';
import styles from './FriendList.module.css';
import PropTypes from 'prop-types';
import {FriendItem} from '../FriendListItem/FriendListItem';

const FriendList = ({friends}) => {
    return (
        <ul className={styles.List}>
            {friends.map(el=>{
              return <FriendItem key={el.id} name={el.name} avatar={el.avatar} isOnline={el.isOnline} />
            })}
        </ul>
    )
}

export {FriendList};
