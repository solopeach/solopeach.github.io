import React from 'react';
import styles from './Biosection.module.css';
import Button from './Button';
import Customizer from './Customizer';
import Screen from './Screen';

const Bio = ({ children }) => {
    return (
        <div className={styles.bio}>
            <div className={styles.name}>Roni Wu</div>
            <div className={styles.divider} />
            <Screen />
            <div className={styles.contactsection}>
                <Button svgName="linkedin" url="https://www.linkedin.com/in/roni-wu-908900140/" />
                <Button svgName="github" url="https://github.com/solopeach" />
                <Button iconName="IoMail" url="mailto:roniyy.wu@gmail.com" />
                <Button iconName="IoDocumentTextOutline" />
            </div>
            <div className={styles.skills}>
                <div className={styles.skillsintro}>
                    <div className={styles.skillstitle}>Avatar customizer</div>
                    <div className={styles.skillsline} />
                </div>
                <Customizer name="Fullstack Developer" />
                <Customizer name="UX Designer" />
                <Customizer name="Digital Artist" />
            </div>
        </div>
    );
};

export default Bio;
