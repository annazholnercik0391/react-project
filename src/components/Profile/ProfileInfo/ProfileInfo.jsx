import React from "react";
import s from "./ProfileInfo.module.css"
import Preloader from "../../common/Preloader/Preloader"
import noPhoto from "../../../assets/images/no-photo.png"
import ProfileStatus from './ProfileStatus'
const ProfileInfo = (props) => {

  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div>
      {/* <div>
        <img src='https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg' alt="main_picture" />
      </div> */}

      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large != null ? props.profile.photos.large : noPhoto} alt="#"></img>
        <div >
          <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
          <h3 className={s.profileName}>{props.profile.fullName}</h3>
          <p className={s.profileDescription}>Looking for a job: {props.profile.lookingForAJobDescription}<br />
            Contacts:<br />
            Github: {props.profile.contacts.github}<br />
            VK: {props.profile.contacts.vk}
          </p>
        </div>
      </div>
    </div >
  )
}

export default ProfileInfo