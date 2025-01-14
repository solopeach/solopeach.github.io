import React, { useState } from 'react';
import styles from './Coop.module.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";
import coopData from '../data/coopData.js';

const Coop = ({ coop }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.container}>
            <div className={styles.maindetails} onClick={toggleOpen}>
                <div className={styles.leftcontainer}>
                    <img
                        className={styles.img}
                        src={coop.image}
                        alt="Coop Image"
                    />
                    <div className={styles.maintext}>
                        <h2 className={styles.role}>{coop.roleName}</h2>
                        <span className={styles.bottomdetails}>{coop.company} | <FaLocationDot /> {coop.location}</span>
                        <div className={styles.date}>{coop.date}</div>
                    </div>
                </div>

                {/* Toggle the icon based on open/closed state */}
                <div className={styles.logo}>
                    {isOpen ? <FaChevronUp size='2em' className={styles.icon} /> : <FaChevronDown size='2em' className={styles.icon} />}
                </div>
            </div>

            {/* Only show this when isOpen is true */}
            <div className={isOpen ? styles.hiddenOpen : styles.hiddenClosed}>

                <div className={styles.hiddenContent}>
                    <div className={styles.stackcontainer}>
                        {coop.stack.map((stack, index) => <div className={styles.stacktag}>{stack}</div>)}

                    </div>

                    <div className={styles.whatididcontainer}>
                        <ul className={styles.whatididlist}>
                            {coop.tasks.map((task, index) => <li className={styles.whatididpoint}>{task}</li>)}
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Coop;
