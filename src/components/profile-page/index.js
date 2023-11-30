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

            <div className='profile-page-details'>
                <div className='profile-page-details-wrap'>
                    <div className='profile-title absolute-center'>Profile page</div>
                    <div className='user-profile-details'>
                        <div className='left-user-profile-details'>
                          <div className='profile-name'>Name</div>
                          <div className='user-name'>Username | Catch phrase</div>
                        </div>
                        <div className='right-user-profile-details'>
                          <div className='user-profile-address'>Address</div>
                          <div className='user-profile-email'>Email | Phone</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='post-page-details'>
                <div className='post-page-details-wrap'>
                    <div className='post-title' style={{padding:"20px 0px"}}>Post title</div>
                    <div className='post-content'>Content</div>
                </div>
                <div className='post-page-details-wrap'>
                    <div className='post-title' style={{padding:"20px 0px"}}>Post title</div>
                    <div className='post-content'>Content</div>
                </div>
                <div className='post-page-details-wrap'>
                    <div className='post-title' style={{padding:"20px 0px"}}>Post title</div>
                    <div className='post-content'>Content</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserProfile;