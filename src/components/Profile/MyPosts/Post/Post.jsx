import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {
    return (
            <div className={styles.item}>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu_pXqSOmt6hftObxhPHOKXzQgAcwb9nUWEA&usqp=CAU'></img>
                {props.message}
                <div>
                    <span>{props.like}</span>
                </div>
            </div>
    )
}

export default Post;