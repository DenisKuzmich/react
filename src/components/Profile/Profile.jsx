import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import styles from "./Profile.module.css";
import ProfileInfo from './Profileinfo/ProfileInfo';


const Profile = (props) => {

    return (
        <div className={styles.content}>
            <ProfileInfo />
            <MyPosts postData={props.profilePage.postData} 
                     newPostText={props.profilePage.newPostText}
                     dispatch={props.dispatch} />
        </div>
    )
};

export default Profile;


// addPost={props.addPost}
// updateNewPostText={props.updateNewPostText}
// newPostText={props.profilePage.newPostText}