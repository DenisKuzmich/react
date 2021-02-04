const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogReducer = (state, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let messageText = state.newMessageText;
            state.messageData.push({id: 6, message: messageText});
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT: 
            state.newMessageText = action.newMessage;
            return state;
        default:
            return state;
    }
};

export default dialogReducer;
export const addMessageCreater = () => ({type: ADD_MESSAGE});
export const updateNewMessageTextCreater = (message) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage: message});