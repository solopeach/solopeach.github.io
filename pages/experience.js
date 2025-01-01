import React from 'react';
import Coop from '../components/Coop'
import styles from '../styles/Experience.module.css'
import coopData from '../data/coopData'

const Experience = () => {
    return (
        <div className={styles.container}>{coopData.map((coop, index) => <Coop coop={coop} />)}</div>
    );
};

export default Experience;
