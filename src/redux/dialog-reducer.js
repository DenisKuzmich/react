const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogData: [
        {id: 1, name: 'Dmitry'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Andrey'},
        {id: 4, name: 'Sacha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
      ],
      messageData: [
        {id: 1, message: 'Yo'},
        {id: 2, message: 'Hi'},
        {id: 3, message: 'How are you ?'},
        {id: 4, message: 'What is your IT ?'},
        {id: 5, message: 'very well'}
      ],
      newMessageText: '',
};

const dialogReducer = (state = initialState, action) => {
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