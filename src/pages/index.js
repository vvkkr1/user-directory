import React from 'react'
// import {BrowserRouter,Link,Routes,Route} from "react-router-dom"
import "./homepage.css";
import RoutingComponent from './Routing';


const Homepage = () => {
  return (
    <div className='homepage'>
        <div className='homepage-container'>
          <RoutingComponent/>
        </div>   
    </div>
  )
}
export default Homepage