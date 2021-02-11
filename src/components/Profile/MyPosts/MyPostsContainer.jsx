import React from 'react';
import { addPostCreater, updateNewPostTextCreater } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';


// const MyPostsContainer = () => {

//     return (
//         <StoreContext.Consumer>
//             {
//             (store) => {
//                 let state = store.getState();
//                 let addPost = () => {
//                     store.dispatch(addPostCreater());
//                 };

//                 let onPostChange = (text) => {
//                     store.dispatch( updateNewPostTextCreater(text));
//                 };
//                 return (
//                     <MyPosts updateNewPostText={onPostChange}
//                         addPost={addPost}
//                         profilePage={state.profilePage}
//                         newPostText={state.profilePage.newPostText} />)
//             }
//         }
//         </StoreContext.Consumer>
//     )
// }

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
        newPostText: state.profilePage.newPostText
    };
};
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostCreater());
        },
        updateNewPostText: (text) => {
            dispatch( updateNewPostTextCreater(text));
        }
    };
}; 

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContainer;
