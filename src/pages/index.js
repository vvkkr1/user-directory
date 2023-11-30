import React from 'react'
import "./homepage.css";
import UserDirectory from '../components/user-directory';
import UserProfile from '../components/profile-page';

const Homepage = () => {
  return (
    <div className='homepage'>
        <div className='homepage-container'>
            <UserDirectory/>
            {/* <UserProfile/> */}
        </div>   
    </div>
  )
}

export default Homepage