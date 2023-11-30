import React from 'react'
import "./homepage.css";
import UserDirectory from '../components/user-directory';
import UserProfile from '../components/profile-page';
import DigitalClock from '../components/clock';

const Homepage = () => {
  return (
    <div className='homepage'>
        <div className='homepage-container'>
            {/* <UserDirectory/> */}
            <UserProfile/>
            {/* <DigitalClock/> */}
        </div>   
    </div>
  )
}

export default Homepage