import React from 'react';
import Preloader from '../../Preloader/Preloader';
import styles from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
    
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div className={styles.content}>
            <img src="https://miro.medium.com/max/11730/0*ihTZPO4iffJ8n69_" />
            <div className={styles.descriptionBlock}>
                <img className={styles.profilePhoto} src={props.profile.photos.large} />
                <div>{props.profile.fullName}</div>
                <div>{props.profile.aboutMe}</div>
                <div>{props.profile.lookingForAJob + 'Ищу работу'}</div>
                <div>{props.profile.lookingForAJobDescription}</div>
            </div>
        </div>
    )
};

export default ProfileInfo;