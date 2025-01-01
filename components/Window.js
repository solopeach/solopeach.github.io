import React from 'react';
import styles from './Window.module.css';

const Window = ({ children }) => {
    return (
        <label className={styles.switch}>
            <input className={styles.checkbox} type="checkbox" />
            <span className={styles.slider}></span>
        </label>
    );
};

export default Window;
