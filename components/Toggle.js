import React from 'react';
import styles from './Toggle.module.css';

const Toggle = ({ isActive, onToggle }) => {
    return (
        <label className={styles.switch}>
            <input
                className={styles.checkbox}
                type="checkbox"
                checked={isActive}
                onChange={onToggle}
            />
            <span className={styles.slider}></span>
        </label>
    );
};

export default Toggle;
