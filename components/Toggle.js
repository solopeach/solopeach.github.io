import React from 'react';
import styles from './Toggle.module.css';

const Toggle = ({ children }) => {
    return (
        <label className={styles.switch}>
            <input className={styles.checkbox} type="checkbox" />
            <span className={styles.slider}></span>
        </label>
    );
};

export default Toggle;
