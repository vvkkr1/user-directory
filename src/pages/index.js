import React from 'react'
import {BrowserRouter,Link,Routes,Route} from "react-router-dom"
import "./homepage.css";
import UserDirectory from '../components/user-directory';
import UserProfile from '../components/profile-page';
import DigitalClock from '../components/clock';
import RoutingComponent from '../Routing';
import UserData from '../components/user-directory/user-data';

const Homepage = () => {
  return (
    <div className='homepage'>
        <div className='homepage-container'>
            <UserData/>
            {/* <RoutingComponent/> */}
            {/* <DigitalClock/> */}
            {/* <UserProfile/> */}
        </div>   
    </div>
  )
}

export default Homepage