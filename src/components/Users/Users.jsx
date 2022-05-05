import React from "react";
import s from "./Users.module.css";
import UserPhoto from '../../assets/images/user.png'
import { NavLink } from "react-router-dom";


const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return < div >
    <div>
      {pages.map(p => {
        return <span className={props.currentPage === p && s.selectedPage}
          onClick={(e) => { props.onPageChanged(p) }} > {p}</span>
      })}
    </div>
    {
      props.users.map(u => <div key={u.id}>
        <span>
          <div>
            <NavLink to={'/profile/' + u.id}>
              <img src={u.photos.small != null ? u.photos.small : UserPhoto}
                className={s.userPhoto} alt="user_photo" />
            </NavLink>
          </div>
          <div>
            {u.subscribed ?
              <button disabled={props.followingInProgress.some(id => id === u.id)}
                onClick={() => { props.unsubscribe(u.id) }}
              >Unsubscribe </button> :
              <button disabled={props.followingInProgress.some(id => id === u.id)}
                onClick={() => { props.subscribe(u.id) }}
              >Subscribe </button>}
          </div>
        </span>
        <span>
          <span>
            <div>{u.name}</div>
            <div>{u.status}</div>
          </span>
          <span>
            {/* <div>{u.location.country}</div> */}
            {/* <div>{u.location.city}</div> */}
          </span>
        </span>
      </div >)
    }
  </div >
}
export default Users
