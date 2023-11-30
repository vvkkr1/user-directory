import React, { useState } from 'react'
import "./userDirectory.css";



const UserDirectory = () => {
  
  return (
    <div className='user-directory'>
          <div className='title-directory'>Directory</div>
          <div className='user-directory-wrap'>
                <div className='title'>Name: Person</div>
                <div className='posts'>Posts: 12</div>
          </div>
          <div className='user-directory-wrap'>
                <div className='title'>Name: Person</div>
                <div className='posts'>Posts: 12</div>
          </div>
    </div>
  )

}
export default UserDirectory