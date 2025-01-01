import React from 'react';
import Project from '../components/Project'
import styles from '../styles/Experience.module.css'
import projectData from '../data/projectData'

const Projects = () => {
    return (
        <div className={styles.container}>{projectData.map((project, index) => <Project project={project} />)}</div>
    );
};

export default Projects;
