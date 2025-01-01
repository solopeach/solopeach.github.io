import React from 'react';
import styles from './FaveItem.module.css';

const FaveItem = ({ src, alt, title, description }) => (
    <div className={styles.griditem}>
        <img src={src} alt={alt} />
        <div className={styles.caption}>
            <div>{title}</div>
            <div className={styles.description}>{description}</div>
        </div>
    </div>
);

export default FaveItem;