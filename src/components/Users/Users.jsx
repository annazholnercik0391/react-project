import React from "react";
import s from "./Users.module.css";


const Users = (props) => {

  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1, photoUrl: 'https://stuki-druki.com/aforizms/Dmitriy-Nagiev-01.jpg',
        subscribed: false, fullName: 'Dmitry', status: 'I am a boss',
        location: { city: 'Minsk', country: 'Belarus' }
      },
      {
        id: 2, photoUrl: 'https://stuki-druki.com/aforizms/Dmitriy-Nagiev-01.jpg',
        subscribed: false, fullName: 'Evgeni', status: 'I am a boss too',
        location: { city: 'Moscow', country: 'Russia' }
      },
      {
        id: 3, photoUrl: 'https://stuki-druki.com/aforizms/Dmitriy-Nagiev-01.jpg',
        subscribed: true, fullName: 'Bob', status: 'I like football',
        location: { city: 'Kiev', country: 'Ukraine' }
      },
      {
        id: 4, photoUrl: 'https://stuki-druki.com/aforizms/Dmitriy-Nagiev-01.jpg',
        subscribed: true, fullName: 'Anna', status: 'I am pretty',
        location: { city: 'London', country: 'UK' }
      }
    ])
  }


  return <div>
    {props.users.map(u => <div key={u.id}>
      <span>
        <div>
          <img src={u.photoUrl} className={s.userPhoto} />
        </div>
        <div>
          {u.subscribed ?
            <button onClick={() => {
              props.unsubscribe(u.id)
            }}>Unsubscribe</button> :
            <button onClick={() => {
              props.subscribe(u.id)
            }}>Subscribe</button>}

        </div>
      </span>
      <span>
        <span>
          <div>{u.fullName}</div>
          <div>{u.status}</div>
        </span>
        <span>
          <div>{u.location.country}</div>
          <div>{u.location.city}</div>
        </span>
      </span>
    </div>)
    }
  </div >
}

export default Users