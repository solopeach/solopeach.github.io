import React from 'react';
import styles from './Customizer.module.css';
import Toggle from './Toggle';

const Customizer = ({ name, isActive, onToggle }) => {
    return (
        <div className={styles.togglesection}>
            <Toggle isActive={isActive} onToggle={onToggle} />
            <h4>{name}</h4>
        </div>
    );
};

export default Customizer;
