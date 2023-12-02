import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./profile.css";
import DigitalClock from '../clock-country-main/clock';
import CountryClock from '../clock-country-main/country-clock';


const UserProfile = (props) => {
  const navigate = useNavigate();


  const navigateToDirectory=()=>{
    navigate('/')
  } 
  
  // const data = useContext(UserDataContext);


  return (
    <div className='user-profile'>
        {/* This is user profile */}
        <div className='user-profile-wrap'>
            <div className='header'>
                <div className='header-wrap'>
                    <div className='header-btn' >
                      <button onClick={navigateToDirectory}>Back</button>
                    </div>

                    <div className='country-container'>
                        <div className='country'>
                            <CountryClock/>
                        </div>
                      {/* Country Dropdown */}
                      </div>

                    <div className='digital-clock'>
                      <DigitalClock/>
                      <div className='digital-clock-btn'>
                        {/* <button>Pause/Start</button> */}
                      </div>
                    </div>

                </div>
            </div>

            <div className='profile-title absolute-center'>Profile page</div>


            <div className='post-page-details'>
                <div className='post-page-details-wrap'>
                    <div className='post-title' style={{padding:"20px 0px"}}>Post title - - -  {props.state.title}</div>
                    <div className='post-content'>Content - - - {props.state.body}</div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default UserProfile

