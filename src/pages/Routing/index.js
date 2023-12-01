import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserProfile from '../../components/profile-page'
import UserDirectory from '../../components/user-directory-page'
import UserData from '../../components/user-directory-page/user-data'
import ProfileData from '../../components/profile-page/profile-data'
// import ProfileData from '../../components/profile-page/profile-data'
// import UserDirectory from '../components/user-directory-page'

const RoutingComponent = () => {
  

  return (
    <div>
        <BrowserRouter>
              {/* <Link exact to = '/'>Home</Link>
              <Link to="/directory/">Directory</Link>
              <Link to="/profile/">Profile</Link> */}


              <Routes>
                {/* <Route exact path='/' element={<UserDirectory/> }/> */}
                <Route exact path='/' element={<UserData/> }/>


              </Routes>
              <Routes>
                {/* <Route path='/profile' element={<UserProfile />} /> */}
                <Route path = '/profile' element={<ProfileData/>}/>
              </Routes>
            </BrowserRouter>
    </div>
  )
}
export default RoutingComponent;