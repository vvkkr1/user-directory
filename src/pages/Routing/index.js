import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserProfile from '../../components/profile-page'
import UserDirectory from '../../components/user-directory-page'


const RoutingComponent = () => {
  

  return (
    <div>
        <BrowserRouter>
              <Routes>
                <Route exact path='/' element={<UserDirectory /> }/>
              </Routes>
              <Routes>
                <Route path='/profile' element={<UserProfile />} />
              </Routes>
        </BrowserRouter>
    </div>
  )
}
export default RoutingComponent;