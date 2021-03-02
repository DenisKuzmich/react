
import dialogReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";

let store = {
  _state: {
    dialogPage: {
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
    },
    profilePage: {
        postData: [
            {id: 1, message: 'Hi, how are you', likes: 'like: 2'},
            {id: 2, message: 'Yoy', likes: 'like: 3'},
            {id: 3, message: 'hey', likes: 'like: 6'},
            {id: 4, message: 'How is you react ?', likes: 'like: 7'},
            {id: 5, message: 'Very well', likes: 'like: 0'}
          ],
        newPostText: 'Yo-Yo-yo',
    },
  },

  getState() {
    return this._state;
  },

  subscribe (observer) {
    this._rerenderTree = observer;
  },
  _rerenderTree() {
    console.log('123');
  },

  dispatch(action) {
    dialogReducer(this._state.dialogPage, action);
    profileReducer( this._state.profilePage, action);

    this._rerenderTree(this._state);
  }
};

export default store;
