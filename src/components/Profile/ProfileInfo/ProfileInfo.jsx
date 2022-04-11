import React from "react";
import s from "./ProfileInfo.module.css"

const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <img src='https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg' />
      </div>
      <div className={s.descriptionBlock}>
        ava+description
      </div>
    </div>
  )
}

export default ProfileInfo