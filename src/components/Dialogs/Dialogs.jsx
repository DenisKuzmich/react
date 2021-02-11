import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import styles from "./Dialogs.module.css";
import Message from './Message/Message';
import { addMessageCreater, updateNewMessageTextCreater } from '../../redux/dialog-reducer';


const Dialogs = (props) => {
    
    let state = props.dialogPage;

    let newMessageText = state.newMessageText;
    let dialogsElement = state.dialogData.map( d => <DialogItem name= {d.name} id={d.id} />);
    let messagesElement = state.messageData.map( m => <Message message={m.message} />);
    
    
    let addMessage= () => {
        props.sendMessage();
    };

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessageText(text);
    };

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={styles.messages}>
                {messagesElement}
                <div>
                <textarea placeholder="Enter you message" 
                            value={newMessageText} 
                            onChange={onMessageChange}/>
                </div>
                <button onClick={addMessage}>Add post</button>
            </div>

        </div>
    )
}

export default Dialogs;