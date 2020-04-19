import React from 'react';
import styles from './Stats.module.css';
import PropTypes from 'prop-types';

const Stats = ({followers,likes,views}) => {
    return (
        <ul className={styles.List}>
    <li className={styles.Item}>
      <span className={styles.Label}>Followers</span>
    <span className={styles.Quantity}>{followers}</span>
    </li>
    <li className={styles.Item}>
      <span className={styles.Label}>Views</span>
    <span className={styles.Quantity} >{views}</span>
    </li>
    <li className={styles.Item}>
      <span className={styles.Label}>Likes</span>
      <span className={styles.Quantity} >{likes}</span>
    </li>
  </ul>
    )
}
Stats.propTypes = {
  followers : PropTypes.number,
  views : PropTypes.number,
  likes : PropTypes.number,

}
export {Stats};