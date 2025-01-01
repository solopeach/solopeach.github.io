import styles from './index.module.css';
import Window from '../components/Window.js';
import Image from 'next/image';
import { motion } from "framer-motion";
import Link from 'next/link'; 

export default function Home() {
  const images = [
    {
      src: "/images/aboutwindow.png",
      alt: "About window",
      className: styles.about,
      link: "/about",
    },
    {
      src: "/images/experiencewindow.png",
      alt: "Experience window",
      className: styles.exp,
      link: "/experience",
    },
    {
      src: "/images/projectswindow.png",
      alt: "Projects window",
      className: styles.projects,
      link: "/projects",
    },
  ];

  return (
    <div className={styles.constraints}>
      <img
        key={0}
        src="/images/introwindow.png"
        alt="Intro window"
        className={styles.intro}
      />
      {images.map((image, index) => (
        <Link key={index} href={image.link}>
          <motion.img
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            src={image.src}
            alt={image.alt}
            className={image.className}
          />
        </Link>
      ))}
      <img
        key={10}
        src="/images/folders.png"
        alt="Folders backdrop"
        className={styles.folders}
      />
      <img
        key={10}
        src="/images/bottom bar.png"
        alt="Bottom bar backdrop"
        className={styles.bottombar}
      />
    </div>
  );
}
