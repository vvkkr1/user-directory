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
              <div className='posts'>Posts: 1</div>
          </div>
       

        <div className='profile-page-details'>
                <div className='profile-page-details-wrap'>
                    <div className='user-profile-details'>
                        <div className='left-user-profile-details'>
                          <div className='profile-name'>Name: {props.data.name}</div>
                          <div className='user-name'>Username: {props.data.username}</div>
                          <div className='catch-phrase'>Catch phrase: {props.data.company.catchPhrase}</div>
                        </div>

                        <div className='right-user-profile-details'>
                          <div className='user-profile-address'>
                              <div className='address'>Address</div>
                              <span>Suite: {props.data.address.suite}</span><br/>
                              <span>Street: {props.data.address.street}</span><br/>
                              <span>City: {props.data.address.city}</span><br/>
                              <span>Zipcode: {props.data.address.zipcode}</span><br/>
                              <span>Geo: {props.data.address.geo.lat} - {props.data.address.geo.lng}</span>
                          </div>
                          <div className='user-profile-email'>Email: {props.data.email}</div>
                          <div className='user-profile-phone'>Phone: {props.data.phone}</div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
      </div>
       
    )

}
export default UserDirectory