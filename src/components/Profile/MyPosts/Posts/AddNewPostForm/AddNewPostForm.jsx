import React from "react";
import { reduxForm } from "redux-form";
import { Field } from "redux-form";
import s from '../../MyPosts.module.css'

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={"textarea"} className={s.postsEnter}
          placeholder={'Enter your message'}
          name={'newPostText'} />
      </div>
      <div>
        <button className={s.messageBtn} >Add Post</button>
      </div>
    </form>
  )
}

export const NewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(AddNewPostForm)