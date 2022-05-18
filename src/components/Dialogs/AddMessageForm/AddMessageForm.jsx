import React from "react"
import { reduxForm } from "redux-form"
import { Field } from "redux-form"
import { maxLengthCreator, required } from "../../../utils/validators/validators"
import { Textarea } from "../../common/FormControls/FormControls"
import s from "../Dialogs.module.css"

const maxLengthCreator50 = maxLengthCreator(50)

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea} name={"newMessageBody"} className={s.messageEnter}
          validate={[required, maxLengthCreator50]}
          placeholder="Enter your message" />
      </div>
      <div>
        <button className={s.messageBtn} >Send</button>
      </div>
    </form>
  )
}


export const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(AddMessageForm)