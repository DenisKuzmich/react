import React from 'react';
import styles from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div className={styles.content}>
            <img src="https://miro.medium.com/max/11730/0*ihTZPO4iffJ8n69_"></img>
            <div className={styles.descriptionBlock}>
                ava + descr
            </div>
        </div>
    )
};

export default ProfileInfo;