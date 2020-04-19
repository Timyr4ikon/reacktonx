import React from 'react';
import styles from './ProfileDescription.module.css';

const ProfileDescription = (props) => {
    
    return (
        <div >
            <img
            className={styles.Avatar}
            src={props.imgUrl}
            alt="user avatar"
            />
            <p className={styles.Name}>{props.name}</p>
             <p className={styles.Tag}>{props.tag}</p>
            <p className={styles.Tag}>{props.location}</p>
      </div>
    )
}

export {ProfileDescription};