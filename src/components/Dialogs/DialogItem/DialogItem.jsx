import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from "./../Dialogs.module.css";

const DialogItem = (props) => {
    let path = '/dialog/' + props.id;

    return (
        <div className={styles.dialog}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu_pXqSOmt6hftObxhPHOKXzQgAcwb9nUWEA&usqp=CAU'/>
            <NavLink to={path} activeClassName={styles.active}>{props.name}</NavLink>
        </div>
    )
}


export default DialogItem;