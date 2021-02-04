import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import styles from "./Dialogs.module.css";
import Message from './Message/Message';
import { addMessageCreater, updateNewMessageTextCreater } from '../../redux/dialog-reducer';


const Dialogs = (props) => {

    let dialogsElement = props.dialogPage.dialogData.map( d => <DialogItem name= {d.name} id={d.id} />);
    let messagesElement = props.dialogPage.messageData.map( m => <Message message={m.message} />);
    

    let addPostElement = React.createRef();
    
    let addMessage= () => {
        props.dispatch(addMessageCreater());
    };

    let onMessageChange = () => {
        let text = addPostElement.current.value;
        let messageAction = updateNewMessageTextCreater(text);
        props.dispatch(messageAction);
    };

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={styles.messages}>
                {messagesElement}
                <div>
                <textarea placeholder="Enter you message" ref={addPostElement} value={props.dialogPage.newMessageText} onChange={onMessageChange}/>
                </div>
                <button onClick={addMessage}>Add post</button>
            </div>

        </div>
    )
}

export default Dialogs;