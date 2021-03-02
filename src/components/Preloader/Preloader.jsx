import React from 'react';
import preloader from '../../images/Preloader.svg';
import styles from './Preloader.module.css';

let Preloader  = (props) => {
    return <div className={styles.load}>
        <img  src={preloader}/>
        </div>
}

export default Preloader;