import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from "./Navbar.module.css";


const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.item}>
                <NavLink to='/profile' activeClassName={styles.activeLink}>Profile</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to='/dialogs' activeClassName={styles.activeLink}>Messages</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to='/news' activeClassName={styles.activeLink}>News</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to='/musik' activeClassName={styles.activeLink}>Musik</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to='/settings' activeClassName={styles.activeLink}>Settings</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to='/friends' activeClassName={styles.activeLink}>Friends</NavLink>
            </div>
        </nav>
    )
};

export default Navbar;