import React from 'react';
import styles from './Statistic.module.css';
import PropTypes from 'prop-types';

const StatisticPanel = ({title,stats}) => {
    return (
        <section className={styles.Section}>
            <h2 className={styles.Title}>{title}</h2>
            <ul className={styles.List}>
    {stats.map(el => {
        return (
            <li style={{backgroundColor:generateColor()}} className={styles.Item} key={el.id}>
            <span className={styles.Label} >{el.label}</span>
            <span className={styles.Quantity}>{el.percentage}%</span>
          </li>
        )
    })}
            </ul>
        </section>
        
    )
}

export {StatisticPanel};
function generateColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16)
}

StatisticPanel.propTypes = {
    title : PropTypes.string.isRequired,
    states: PropTypes.arrayOf(PropTypes.object)
}
