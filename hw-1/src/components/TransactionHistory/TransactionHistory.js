import React from 'react';
import styles from './TransactionHistory.module.css';
import {Transaction} from '../Transaction/Transaction';
import transactions from '../db/transaction.json';



const TransactionHistory = (props) =>{
    return(
        <table className={styles.Table}>
            <thead>
                <tr>
                <th className={styles.Item}>Type</th>
                <th className={styles.Item}>Amount</th>
                <th className={styles.Item}> Currency</th>
                </tr>
            </thead>
            <tbody>
                <Transaction transactions={transactions} />
            </tbody>
        </table>
    )
};

export {TransactionHistory};