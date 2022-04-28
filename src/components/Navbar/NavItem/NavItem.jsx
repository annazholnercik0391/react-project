import React from 'react';
import s from './NavItem.module.css'
import { NavLink } from "react-router-dom";

const NavItem = (props) => {
  return (
    <div className={s.navItem}>
      <img src='https://avatarko.ru/img/kartinka/2/zhivotnye_kot_prikol_ochki_1637.jpg' alt='img_navItem' />
      <div className={s.navItemName}>
        <NavLink to={"/dialogs/" + props.id}
          className={({ isActive }) => (isActive ? ` ${s.active}` : `${s.navItemName}`)}>{props.name}</NavLink>
      </div>
    </div>
  )
}

export default NavItem