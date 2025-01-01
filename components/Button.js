import React from 'react';
import styles from './Button.module.css';
import * as Icons from "react-icons/io5";

const Button = ({ url, svgName, iconName, onClick, isCircle }) => {
    const IconComponent = iconName ? Icons[iconName] : null;

    const handleClick = () => {
        if (onClick) {
            onClick();
        } else if (url) {
            window.open(url, '_blank');
        }
    };

    return (
        <button
            className={styles.pushable}
            onClick={handleClick}
            aria-label={url ? `Go to ${url}` : 'Button action'}
        >
            <span className={`${styles.shadow} ${isCircle ? styles.circle : ''}`}></span>
            <span className={`${styles.edge} ${isCircle ? styles.circle : ''}`}></span>
            <span className={`${styles.front} ${isCircle ? styles.circle : ''}`}>
                {svgName ? (
                    <img
                        src={`/images/${svgName}.svg`}
                        alt={svgName.split('.')[0]}
                        width={100}
                        height={100}
                        className={styles.img}
                    />
                ) : IconComponent ? (
                    <IconComponent size={100} />
                ) : (
                    <span>No icon provided</span>
                )}
            </span>
        </button>
    );
};

export default Button;
