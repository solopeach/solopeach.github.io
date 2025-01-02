import React, { useState } from "react";
import styles from "./Biosection.module.css";
import Button from "./Button";
import Customizer from "./Customizer";
import Screen from "./Screen";

const Bio = ({ children }) => {
    const [activeToggle, setActiveToggle] = useState(null);
    const [role, setRole] = useState(null);

    const handleToggleChange = (name) => {
        if (name == activeToggle) {
            setActiveToggle(null);
            setRole(null);
        } else {
            setActiveToggle(name);
            setRole(name);
        }
    };

    return (
        <div className={styles.bio}>
            <div className={styles.name}>Roni Wu</div>
            <div className={styles.divider} />
            <Screen role={role} />
            <div className={styles.contactsection}>
                <Button
                    svgName="linkedin"
                    url="https://www.linkedin.com/in/roni-wu-908900140/"
                />
                <Button svgName="github" url="https://github.com/solopeach" />
                <Button iconName="IoMail" url="mailto:roniyy.wu@gmail.com" />
                <Button iconName="IoDocumentTextOutline" />
            </div>
            <div className={styles.skills}>
                <div className={styles.skillsintro}>
                    <div className={styles.skillstitle}>Avatar customizer</div>
                    <div className={styles.skillsline} />
                </div>
                <Customizer
                    name="Fullstack Developer"
                    isActive={activeToggle === "Fullstack Developer"}
                    onToggle={() => handleToggleChange("Fullstack Developer")}
                />
                <Customizer
                    name="UX Designer"
                    isActive={activeToggle === "UX Designer"}
                    onToggle={() => handleToggleChange("UX Designer")}
                />
                <Customizer
                    name="Digital Artist"
                    isActive={activeToggle === "Digital Artist"}
                    onToggle={() => handleToggleChange("Digital Artist")}
                />
            </div>
        </div>
    );
};

export default Bio;
