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
            return {
                ...state,
                messageData: [...state.messageData, {id: 6, message: messageText}],
                newMessageText: ''
            };
        case UPDATE_NEW_MESSAGE_TEXT: 
            return {
                ...state,
                newMessageText: action.newMessage
            };
        default:
            return state;
    }
};

export default dialogReducer;
export const addMessageCreater = () => ({type: ADD_MESSAGE});
export const updateNewMessageTextCreater = (message) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage: message});


// let stateCopy;
// switch (action.type) {
//     case ADD_MESSAGE: {
//         stateCopy = {...state};
//         let messageText = stateCopy.newMessageText;
//         stateCopy.messageData = [...state.messageData];
//         stateCopy.messageData.push({id: 6, message: messageText});
//         stateCopy.newMessageText = '';
//         return stateCopy;
//     }
//     case UPDATE_NEW_MESSAGE_TEXT: {
//         stateCopy = {...state};
//         stateCopy.newMessageText = action.newMessage;
//         return stateCopy;
//     }
//     default:
//         return state;
// }