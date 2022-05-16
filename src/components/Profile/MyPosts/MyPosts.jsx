import React from 'react';
import s from './MyPosts.module.css'
import { NewPostFormRedux } from './Posts/AddNewPostForm/AddNewPostForm';
import Post from './Posts/Post';

const MyPosts = (props) => {

  let postsElements =
    props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

  let onAddPost = (values) => {
    props.addPost(values.newPostText)
  }

  return (
    <div className={s.postsBlock}>
      <h3 className={s.postsTitle}>My posts</h3>
      <NewPostFormRedux onSubmit={onAddPost} />
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts