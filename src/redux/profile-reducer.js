const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    postData: [{
            id: 1,
            message: 'Hi, how are you',
            likes: 'like: 2'
        },
        {
            id: 2,
            message: 'Yoy',
            likes: 'like: 3'
        },
        {
            id: 3,
            message: 'hey',
            likes: 'like: 6'
        },
        {
            id: 4,
            message: 'How is you react ?',
            likes: 'like: 7'
        },
        {
            id: 5,
            message: 'Very well',
            likes: 'like: 0'
        }
    ],
    newPostText: 'Yo-Yo-yo',
    profile: null
};

const profileReducer = (state = initialState, action) => {
    let stateCopy;
    switch (action.type) {
        case ADD_POST: {
            let postText = {
                id: 1,
                message: state.newPostText,
                likes: 5
            };
            return {
                ...state,
                postData: [...state.postData, postText],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: {...state.newPostText},
                newPostText: action.newText
            };
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state;
    }
};

export default profileReducer;

export const addPostCreater = () => ({type: ADD_POST});
export const updateNewPostTextCreater = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

// stateCopy = {...state}
// stateCopy.postData = [...state.postData];
// stateCopy.postData.push(postText);
// stateCopy.newPostText = '';
// return stateCopy;

// stateCopy = {...state}
// stateCopy.newPostText = {...state.newPostText}
// stateCopy.newPostText = action.newText;
// return stateCopy;