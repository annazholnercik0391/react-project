import React from "react";
import { Redirect } from "react-router-dom";
import { AddMessageFormRedux } from "./AddMessageForm/AddMessageForm";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css"
import Message from "./Message/Message";


const Dialogs = (props) => {

  let state = props.dialogsPage
  let newMessageBody = state.newMessageBody
  let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />)
  let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} />)

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody)
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
      <AddMessageFormRedux onSubmit={addNewMessage} />
    </div>
  )
}


export default Dialogs
