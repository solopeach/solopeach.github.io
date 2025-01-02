import React, { useState } from 'react';
import styles from './Profilepfp.module.css';

const Profilepfp = () => {
    const [activeTab, setActiveTab] = useState('tab1');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const getImageSrc = () => {
        return activeTab === 'tab1'
            ? '/images/artroni.jpg'
            : '/images/roni.jpg';
    };

    return (
        <div className={styles.container}>
            <div className={styles.tabsection}>
                <button
                    className={`${styles.tabbutton} ${activeTab === 'tab1' ? styles.activetab : ''}`}
                    onClick={() => handleTabClick('tab1')}
                    style={{ marginRight: '10px' }}
                >
                    This is me
                </button>
                <button
                    className={`${styles.tabbutton} ${styles.secondtab} ${activeTab === 'tab2' ? styles.activetab : ''}`}
                    onClick={() => handleTabClick('tab2')}
                >
                    Also me
                </button>
            </div>

            <div className={styles.content}>
                <img
                    className={styles.img}
                    src={getImageSrc()}
                    alt="Tab Image"
                    width="300"
                />
                <div className={styles.typingcontainer}>
                    <div className={styles.typing} >
                        {activeTab === 'tab2' ?
                            <p key={'1'}>Just kidding! 😆</p>
                            :
                            <p key={'2'}>This is the real me...</p>
                        }</div></div>

            </div>
        </div>
    );
};

export default Profilepfp;
