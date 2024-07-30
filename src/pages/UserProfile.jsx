import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../images/avatar1.jpg'
import { MdEdit } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";




const UserProfile = () => {
  const[avatar, setAvatar] = useState ('')
  return (
    <section className="profile">
      <div className="container profile__container">
        <Link to={`/myposts/sdfsdf`} className='btn'>Back to Home</Link>

        <div className="profile__details">

          <div className="avatar__wrapper">
            <div className="profile__avatar">
              <img src={Avatar}/>
            </div>

            <form className="avatar__form" >
              <input type="file" name='avatar' id='avatar'onChange={e => setAvatar(e.target.files[0])} accept='png, jpg, jpeg'/>
              <label htmlFor="avatar"><MdEdit/></label>
            </form>

            <button className="profile__avatar-btn"><FaCheck/></button>
          </div>

          <h1>Celest Jerez</h1>

        </div>
      </div>
    </section>
  )
}

export default UserProfile