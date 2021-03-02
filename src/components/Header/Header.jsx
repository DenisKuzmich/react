import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from "./Header.css";

const Header = (props) => {
    return (
        <header className='header'>
            <div className={styles.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
            <img src='https://cdn.logo.com/hotlink-ok/logo-social.png' />
        </header>
    )
};

export default Header;