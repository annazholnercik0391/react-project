import React from "react";
import s from "./Users.module.css";
import * as axios from 'axios'
import UserPhoto from '../../assets/images/user.png'

class Users extends React.Component {

  componentDidMount() {
    axios.get("https://social-network.samuraijs.com/api/1.0/users")
      .then(response => {
        this.props.setUsers(response.data.items)
      })
  }
  render() {
    return <div>
      {
        this.props.users.map(u => <div key={u.id}>
          <span>
            <div>
              <img src={u.photos.small != null ? u.photos.small : UserPhoto} className={s.userPhoto} alt="user_photo" />
            </div>
            <div>
              {u.subscribed ?
                <button onClick={() => {
                  this.props.unsubscribe(u.id)
                }}>Unsubscribe</button> :
                <button onClick={() => {
                  this.props.subscribe(u.id)
                }}>Subscribe</button>}

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
        </div>)
      }
    </div >
  }
}

export default Users