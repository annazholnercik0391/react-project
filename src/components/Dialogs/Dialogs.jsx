import React from "react";
import { Redirect } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css"
import Message from "./Message/Message";


const Dialogs = (props) => {

  let state = props.dialogsPage
  let newMessageBody = state.newMessageBody
  let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />)
  let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} />)

  let onSendMessageClick = () => {
    props.sendMessage()
  }

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body)
  }

  if (!props.isAuth) return <Redirect to={"/login"} />

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
      </div>
      <div>
        <textarea className={s.messageEnter} value={newMessageBody}
          onChange={onNewMessageChange}
          placeholder='Enter your message' />
      </div>
      <div>
        <button className={s.messageBtn} onClick={onSendMessageClick}>Send</button>
      </div>
    </div>
  )
}
export default Dialogs
