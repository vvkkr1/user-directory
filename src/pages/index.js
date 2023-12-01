import React from 'react'
import {BrowserRouter,Link,Routes,Route} from "react-router-dom"
import "./homepage.css";
import RoutingComponent from '../Routing';
// import UserDirectory from '../components/user-directory';
// import UserProfile from '../components/profile-page';
// import DigitalClock from '../components/clock-country-main/clock';
// import RoutingComponent from '../Routing';
// import UserData from '../components/user-directory/user-data';
// import CountryClock from '../components/clock-country-main/country-clock';
// import Country from '../components/clock-country-main/country-clock';


const Homepage = () => {
  return (
    <div className='homepage'>
        <div className='homepage-container'>
          {/* <CountryClock/> */}
            {/* <ClockCountry/> */}
            <RoutingComponent/>
            {/* <DigitalClock/> */}
            {/* <UserProfile/> */}
        </div>   
    </div>
  )
}

export default Homepage