import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = (props) => {

    let state = props.profilePage;

    let postsElement = state.postData.map(p => <Post message={p.message} like={p.likes} />);

    let addPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = addPostElement.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={styles.postBlocks}>
            <h3>My posts</h3>
            <div>
                <textarea ref={addPostElement} value={props.newPostText} onChange={onPostChange} />
            </div>
            <button onClick={addPost}>Add post</button>
            <div className={styles.posts}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts;