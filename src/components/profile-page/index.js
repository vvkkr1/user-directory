import React from 'react'
import "./profile.css";
import DigitalClock from '../clock';

const UserProfile = () => {
  return (
    <div className='user-profile'>
        {/* This is user profile */}
        <div className='user-profile-wrap'>
            <div className='header'>
                <div className='header-wrap'>
                    <div className='header-btn'>
                      <button>Back</button>
                    </div>
                    <div className='header-title'>Country Dropdown</div>
                    <div className='digital-clock'>
                      <DigitalClock/>
                      <div className='digital-clock-btn'>
                        <button>Pause/Start</button>
                      </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default UserProfile;