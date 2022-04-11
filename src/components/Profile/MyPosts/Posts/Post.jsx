import React from 'react';
import s from './Post.module.css'

const Post = (props) => {


  return (
    < div className={s.item} >
      <img src='http://content.foto.mail.ru/mail/naven65/100/i-382.jpg' />
      {props.message}
      <div>
        <span >like</span> {props.likesCount}
      </div>

    </ div>
  )
}

export default Post