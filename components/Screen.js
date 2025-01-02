import React, { useState, useEffect } from 'react';
import styles from './Screen.module.css';

const Screen = ({ children, role }) => {
    const [bounced, setBounced] = useState(false);


    useEffect(() => {
        // Trigger bounce animation when the role changes
        setBounced(true);

        // Reset the bounce state after the animation completes
        const timeout = setTimeout(() => {
            setBounced(false);
        }, 200); // Match the animation duration

        return () => clearTimeout(timeout);
    }, [role]);

    return (
        <div className={styles.screen}>
            <div className={styles.facecontainer}>
                <img
                    className={`${bounced ? styles.bounce : ''} ${styles.face}`}
                    src="/images/face.png"
                    alt="Profile Image"
                />
                <img
                    className={`${styles.glasses} ${role === "Fullstack Developer" && styles.show}`}
                    src="/images/glasses.png"
                    alt="Glasses"
                />
                <img
                    className={`${styles.codesymbol} ${role === "Fullstack Developer" && styles.show}`}
                    src="/images/codesymbol.png"
                    alt="Code Symbol"
                />
                <img
                    className={`${styles.shapes1} ${role === "UX Designer" && styles.show}`}
                    src="/images/shapes1.png"
                    alt="Shapes 1"
                />
                <img
                    className={`${styles.shapes2} ${role === "UX Designer" && styles.show}`}
                    src="/images/shapes2.png"
                    alt="Shapes 2"
                />
                <img
                    className={`${styles.pencil} ${role === "Digital Artist" && styles.show}`}
                    src="/images/pencil.png"
                    alt="Pencil"
                />
                <div className={styles.screengrain} />
            </div>
        </div>
    );
};

export default Screen;
