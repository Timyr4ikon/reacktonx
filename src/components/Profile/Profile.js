import React from 'react';
import styles from './Profile.module.css';
import {ProfileDescription} from '../ProfileDescription/ProfileDescription';
import {Stats} from '../Stats/Stats';

const Profile = ({imgUrl,name,tag,location,followers,views,likes}) => {
    
    return (
        <div className={styles.Block}>
            <ProfileDescription 
            imgUrl={imgUrl}
            name={name}
            tag={tag}
            location={location}/>
            <Stats followers={followers} views={views} likes={likes}/>
        </div>
    )
}

export {Profile};