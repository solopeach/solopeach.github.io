import React, { useRef } from "react";
import styles from "./Artgallery.module.css";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import Button from '../components/Button'

const galleryItems = [
    { src: "/images/cat.jpg", alt: "cat" },
    { src: "/images/witch.jpg", alt: "witch" },
    { src: "/images/pokemon.jpg", alt: "pokemon" },
    { src: "/images/kiwi.jpg", alt: "kiwi" },
    { src: "/images/asuka.jpg", alt: "asuka" },
    { src: "/images/mf.jpg", alt: "mf" },
    { src: "/images/mob.jpg", alt: "mob" },
];

const Artgallery = () => {
    const itemListRef = useRef(null);

    const scrollLeft = () => {
        if (itemListRef.current) {
            itemListRef.current.scrollLeft -= 200;
        }
    };

    const scrollRight = () => {
        if (itemListRef.current) {
            itemListRef.current.scrollLeft += 200;
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.titlesection}>
                <div className={styles.intro}>
                    <h3 className={styles.title}>When I'm free, I'm drawing 95% of the time.</h3>
                    <div className={styles.description}>
                        Currently grinding fundamentals, interested in illustration/concept art. Ask me about art resources! Art account soon!
                    </div>
                </div>
                <div className={styles.buttonsection}>
                    <Button
                        iconName="IoArrowBack"
                        onClick={scrollLeft}
                        className={styles.prevbtn}
                        isCircle={true}
                    />
                    <Button
                        iconName="IoArrowForward"
                        onClick={scrollRight}
                        className={styles.nextbtn}
                        isCircle={true}
                    />
                </div>
            </div>
            <div id="item-list" className={styles.itemlist} ref={itemListRef}>
                {galleryItems.map((item, index) => (
                    <img
                        key={index}
                        id={`item-${index}`}
                        className={styles.item}
                        src={item.src}
                        alt={item.alt || `Gallery item ${index + 1}`}
                    />
                ))}
            </div>
        </div >
    );
};

export default Artgallery;
