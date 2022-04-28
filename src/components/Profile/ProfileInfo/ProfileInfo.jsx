import React from "react";
import s from "./ProfileInfo.module.css"
import Preloader from "../../common/Preloader/Preloader"

const ProfileInfo = (props) => {

  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div>
      <div>
        <img src='https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg' alt="main_picture" />
      </div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} alt="#"></img>
        ava+description
      </div>
    </div>
  )
}

export default ProfileInfo