import React from 'react';
import s from './MyPosts.module.css'
import Post from './Posts/Post';

const MyPosts = (props) => {

  let postsElements =
    props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

  let newPostElement = React.createRef()

  let onAddPost = () => {
    props.addPost()
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text)
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea placeholder='Enter your message' onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
        </div>
        <div>
          <button className={s.messageBtn} onClick={onAddPost}>Add Post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts