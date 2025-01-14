import React, { useState } from 'react';
import styles from './Project.module.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import projectData from '../data/projectData.js';

const Project = ({ project }) => {

    return (
        <div className={styles.container}>
            <div className={styles.textcontainer}>
                <div className={styles.maindetails}>
                    <div className={styles.maintext}>
                        <div className={styles.topbar}>
                        <h2>{project.roleName}</h2>
                            {project.url && <a href={project.url} target="_blank" rel="noopener noreferrer">
                                <img src={`/images/githubblack.svg`} width={23} height={23} />
                            </a>}
                        </div>
                        <h3 className={styles.short}>
                            {project.short}
                        </h3>
                    </div>
                </div>
                <div className={styles.hiddenContent}>
                    <div className={styles.stackcontainer}>
                        {project.stack.map((stack, index) => <div className={styles.stacktag}>{stack}</div>)}

                    </div>

                    <div className={styles.whatididcontainer}>
                        {project.description}
                    </div>

                </div>
            </div>
            <img
                className={styles.img}
                src={project.image}
                alt="Project Image"
            />
        </div>
    );
};

export default Project;
