const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postData: [
        {id: 1, message: 'Hi, how are you', likes: 'like: 2'},
        {id: 2, message: 'Yoy', likes: 'like: 3'},
        {id: 3, message: 'hey', likes: 'like: 6'},
        {id: 4, message: 'How is you react ?', likes: 'like: 7'},
        {id: 5, message: 'Very well', likes: 'like: 0'}
      ],
    newPostText: 'Yo-Yo-yo',
};

const profileReducer = (state = initialState, action) => {
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