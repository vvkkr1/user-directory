import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./userDirectory.css";



const UserDirectory = (props) => {

  const navigate = useNavigate();

  const navigateToProfile = () => {
    navigate('/profile');
  }

    return(
        <div className='user-directory'>
          <div className='title-directory'>Directory</div>

          <div className='user-directory-wrap' onClick={navigateToProfile}>
              <div className='title'>Name: {props.data.name} </div>
              <div className='posts'>Posts: 12</div>
          </div>
        </div>
    )

}
export default UserDirectory