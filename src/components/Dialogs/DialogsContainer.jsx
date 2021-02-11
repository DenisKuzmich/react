import React from 'react';
import { addMessageCreater, updateNewMessageTextCreater } from '../../redux/dialog-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';


// const DialogsContainer = () => {

//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let state = store.getState().dialogPage;
//                     let addMessage = () => {
//                         store.dispatch(addMessageCreater());
//                     };

//                     let onMessageChange = (text) => {
//                         store.dispatch(updateNewMessageTextCreater(text));
//                     };
//                     return (
//                         <Dialogs updateNewMessageText={onMessageChange}
//                             sendMessage={addMessage}
//                             dialogPage={state} />)
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// }

let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (text) => {
            dispatch(updateNewMessageTextCreater(text));
        },
        sendMessage: () => {
            dispatch(addMessageCreater());
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;

