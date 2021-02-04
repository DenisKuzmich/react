const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let postText = {
                id: 1,
                message: state.newPostText,
                likes: 5
              };
                state.postData.push(postText);
                state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
};
  
export default profileReducer;

export const addPostCreater = () => ({type: ADD_POST});
export const updateNewPostTextCreater = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});