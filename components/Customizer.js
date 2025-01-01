import React from 'react';
import styles from './Customizer.module.css';
import Toggle from './Toggle'

const Customizer = ({ name }) => {
    return (
        <div className={styles.togglesection}>
            <Toggle />
            <h4>{name}</h4>
        </div>
    );
};

export default Customizer;