import React from 'react';
import styles from "./Profile.module.css";
import ProfileInfo from './Profileinfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';


const Profile = (props) => {

    return (
        <div className={styles.content}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer  />
        </div>
    )
};

export default Profile;


// addPost={props.addPost}
// updateNewPostText={props.updateNewPostText}
// newPostText={props.profilePage.newPostText}