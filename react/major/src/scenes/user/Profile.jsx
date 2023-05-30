import React from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/useraction";

function Profile() {
  const profile = {
    name:'regex',
    pic:"https://www.shutterstock.com/image-vector/url-shortener-use-scissors-address-260nw-2210269047.jpg",
    mobile:'87654321',
    email:'9fbgngf987654@gmail.com',
  }
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logoutUser = () => {
    dispatch(logout());
    navigate('/')
  }
  return (
    <div className='cart'>
      <div>
        <h1>Your Profile</h1>
        <div>
          <img src={profile.pic} alt="unavailable" />
        </div>
        <div>
          <h2>Name:</h2>
          <h2>{profile.name}</h2>
        </div>
        <div>
          <h2>email:</h2>
          <h2>{profile.email}</h2>
        </div>
        <div>
          <h2>mobile:</h2>
          <h2>{profile.mobile}</h2>
        </div>
        <button onClick={logoutUser}>Log out</button>
      </div>
    </div>
  )
}

export default Profile
