import React from "react";
import { reduxForm } from "redux-form";
import { Field } from "redux-form";
import { maxLengthCreator, required } from "../../../../../utils/validators/validators";
import { Textarea } from "../../../../common/FormControls/FormControls";
import styles from '../../MyPosts.module.css'

const maxLengthCreator30 = maxLengthCreator(30)

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea} className={styles.postsEnter}
          placeholder={'Enter your message'}
          name='newPostText'
          validate={[required, maxLengthCreator30]} />
      </div>
      <div>
        <button className={styles.messageBtn} >Add Post</button>
      </div>
    </form>
  )
}

export const NewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(AddNewPostForm)