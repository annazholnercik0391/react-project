import React from "react"
import { reduxForm } from "redux-form"
import { Field } from "redux-form"
import s from "../Dialogs.module.css"

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={"textarea"} name={"newMessageBody"} className={s.messageEnter}
          placeholder="Enter your message" />
      </div>
      <div>
        <button className={s.messageBtn} >Send</button>
      </div>
    </form>
  )
}


export const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(AddMessageForm)