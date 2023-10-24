import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './NavBar.module.css'; 

export default function Navbar() {
    const location = useLocation();
    return (
        <div className={styles.navbar}>
            <div className={styles.navLink}>
                <Link to="/" className={location.pathname === '/' ? styles.link_disabled : styles.link}>
                    <b>About</b>
                </Link>
            </div>
            <div className={styles.navLink}>
                <Link to="/cardset" className={location.pathname === '/cardset' ? styles.link_disabled : styles.link}>
                    <b>CardSet</b>
                </Link>
            </div>
            <div className={styles.navLink}>
                <Link to="/ai" className={location.pathname === '/ai' ? styles.link_disabled : styles.link}>
                    <b>AI Generator</b>
                </Link>
            </div>
        </div>
    );
}

