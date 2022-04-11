import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
  return (
      <div className={`${s.dialog} + '' + ${s.active}`}>
        <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
      </div>
  )
}
const Message = (props) => {
  return (
      <div className={s.message}>
        {props.message}
      </div>
  )
}
const Dialogs = (props) => {
  return (
      <div className={s.dialogs}>
        <div className={s.dialogItems}>
          <DialogItem name="Renata" id="1"/>
          <DialogItem name="Sasha" id="2"/>
          <DialogItem name="Sveta" id="3"/>
          <DialogItem name="Renata" id="4"/>
          <DialogItem name="Anna" id="5"/>
          <DialogItem name="Ilya" id="6"/>
        </div>
        <div className={s.messages}>
          <Message message={"Hi! how are you?"}/>
          <Message message={"I'm great! Thanks! And you?"}/>
          <Message message={"Me to! What the weather today?"}/>
        </div>
      </div>
  )
}
export default Dialogs
