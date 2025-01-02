import React from 'react';
import styles from '../styles/About.module.css'
import FaveGrid from '../components/FaveGrid'
import Artgallery from '../components/Artgallery'
import Profilepfp from '../components/Profilepfp'
import Link from '../components/Link'

const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.introcontainer}>
                <Profilepfp />
                <div className={styles.aboutmesection}>
                    <div className={styles.intro}>
                        <h3 className={styles.introtitle}>
                            Hi there, I'm Roni!
                        </h3>
                        <div className={styles.introbody}>
                            I'm a Computer Scienece student at the University of Waterloo, graduating in Spring 2025.
                            I'm a developer with an eye for design, love for visuals, and passionate about building
                            beautiful digital experiences!
                        </div>
                        <div className={styles.introbody}>
                            Looking for new grad fullstack/frontend developer roles, but also open to UX roles!
                        </div>
                    </div>
                    <div className={styles.extraintro}>
                        <div className={styles.codingbit}>
                            I enjoy fullstack/frontend since it's about building something you can see and interact with!
                        </div>
                        <div className={styles.uxbit}>
                            I'm proficient in product design - I've done 1 UX internship and lots of self-learning!
                            Check out <Link text="my portfolio" url="https://roniwu.framer.website/" />
                        </div>
                    </div>

                </div >

            </div>
            <Artgallery />
            <FaveGrid />
        </div>
    );
};

export default About;
