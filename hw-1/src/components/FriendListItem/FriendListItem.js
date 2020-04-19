import React from 'react';
import styles from './FriendListItem.module.css';
// import PropTypes from 'prop-types';

const FriendItem = ({avatar,name,isOnline,id}) => {
    const fun = isOnline ? styles.Online :styles.Offline;
    return (
        <li key={id} className={styles.Item}>
            <span className={fun}></span>
            <img  className={styles.Avatar} src={avatar} alt="" width="48" />
            <p className={styles.Name}>{name}</p>
        </li>
    )
}

export {FriendItem};