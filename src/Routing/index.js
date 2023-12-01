import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserProfile from '../components/profile-page'
import UserDirectory from '../components/user-directory'

const RoutingComponent = () => {
  

  return (
    <div>
        <BrowserRouter>
              {/* <Link exact to = '/'>Home</Link>
              <Link to="/directory/">Directory</Link>
              <Link to="/profile/">Profile</Link> */}


              <Routes>
                <Route exact path='/' element={<UserDirectory />}/>
              </Routes>
              <Routes>
                <Route path='/profile' element={<UserProfile />} />
              </Routes>
            </BrowserRouter>
    </div>
  )
}
export default RoutingComponent;