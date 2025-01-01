import React from 'react';
import styles from './Layout.module.css';
import Navbar from './Navbar';
import Biosection from './Biosection';

const Layout = ({ children, isHome }) => {
    return (
        <div className={styles.mainsection}>
            <div className={styles.gridcontainer}>
                <div className={styles.main}>
                    <div className={styles.nav}>
                        <Navbar />
                    </div>
                    <Biosection />
                    <div
                        className={`${styles.content} ${isHome ? styles.noScrollbar : ''}`}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Layout;
