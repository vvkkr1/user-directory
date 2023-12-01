import React from 'react'
// import {BrowserRouter,Link,Routes,Route} from "react-router-dom"
import "./homepage.css";
import RoutingComponent from './Routing';
import ProfileData from '../components/profile-page/profile-data';
import UserDirectory from '../components/user-directory-page';



const Homepage = () => {
  return (
    <div className='homepage'>
        <div className='homepage-container'>
          <RoutingComponent/>
          {/* <UserDirectory/> */}
        </div>   
    </div>
  )
}
export default Homepage