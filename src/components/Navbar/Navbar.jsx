import React from 'react';
import s from './Navbar.module.css'
import { NavLink } from "react-router-dom";
import NavItem from "./NavItem/NavItem"

const Navbar = (props) => {
  let navFriends = props.sidebar.friends.map(n => <NavItem key={n.id} id={n.id} name={n.name} />)
  return (
    <div>
      <nav className={s.nav}>
        <div className={s.item}>
          <NavLink to='/profile' className={({ isActive }) => (isActive ? ` ${s.active}` : `${s.item}`)}>Profile</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/dialogs' className={({ isActive }) => (isActive ? `${s.active}` : `${s.item}`)}>Messages</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/users' className={({ isActive }) => (isActive ? `${s.active}` : `${s.item}`)}> Users</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/news' className={({ isActive }) => (isActive ? ` ${s.active}` : `${s.item}`)}>News</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/music' className={({ isActive }) => (isActive ? ` ${s.active}` : `${s.item}`)}>Music</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/settings' className={({ isActive }) => (isActive ? ` ${s.active}` : `${s.item}`)}>Settings</NavLink>
        </div>
      </nav>
      <div className={s.sidebar}>
        <h3>Friends</h3>
        <div className={s.sidebarIcons}>
          {navFriends}
        </div>
      </div>
    </div>
  )
}

export default Navbar