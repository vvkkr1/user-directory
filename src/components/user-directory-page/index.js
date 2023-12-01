import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./userDirectory.css";



const UserDirectory = (props) => {

  const navigate = useNavigate();

  const navigateToProfile = () => {
    navigate('/profile');
  }

    return(
      <div>
         <div className='user-directory'>
          <div className='title-directory'>Directory</div>

          <div className='user-directory-wrap' onClick={navigateToProfile}>
              <div className='title'>Name: {props.data.name} </div>
              <div className='posts'>Posts: 12</div>
          </div>
       

        <div className='profile-page-details'>
                <div className='profile-page-details-wrap'>
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
            </div>
      </div>
       
    )

}
export default UserDirectory