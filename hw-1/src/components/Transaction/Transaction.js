import React from 'react';
import styles from './Transaction.module.css';
import PropTypes from 'prop-types';

let currentNumber= 1;
const Transaction = ({transactions}) =>{
    return (
        <>
            {transactions.map(el => {
                const funnn = currentNumber % 2 === 0 ? styles.ItemM : styles.ItemN;
                currentNumber+=1;
              return  <tr key={el.id}>
                  <th className={funnn} >{el.type}</th>
                  <th className={funnn} >{el.amount}</th>
                  <th className={funnn} >{el.currency}</th>
              </tr>
            })}
        </>
    )
    
}


export {Transaction};

Transaction.propTypes={
    transactions: PropTypes.array.isRequired
}