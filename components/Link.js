import { HiMiniArrowUpRight } from "react-icons/hi2";
import React from 'react';
import styles from './Link.module.css';

const Link = ({ text, url }) => {
    const handleClick = () => {
        if (url) {
            window.open(url, '_blank');
        }
    };

    return (
        <span className={styles.link} onClick={handleClick} >
            {text}
            <HiMiniArrowUpRight size='1.5em' />
        </span>
    );
};

export default Link;