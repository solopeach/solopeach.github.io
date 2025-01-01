import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { useRouter } from "next/router";

const tabs = [
    { label: "Home", href: "/" },
    { label: "Experience", href: "/experience" },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
];

const Navbar = () => {
    const router = useRouter();

    return (
        <div className={styles.navcontainer}>
            {tabs.map((tab) => (
                <Chip
                    text={tab.label}
                    href={tab.href}
                    selected={router.pathname === tab.href}
                    key={tab.label}
                />
            ))}
        </div>
    );
};

const Chip = ({ text, selected, href }) => {
    return (
        <Link href={href} className={styles.navbutton}>
            <span
                className={`${styles.textspan} ${selected ? styles.activetext : ''}`}
            >
                {text}
            </span>
            {selected && (
                <motion.span
                    layoutId="pill-tab"
                    transition={{ type: "spring", duration: 0.5 }}
                    className={styles.customgradient}
                ></motion.span>
            )}
        </Link>
    );
};

export default Navbar;
