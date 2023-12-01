import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./userDirectory.css";



const UserDirectory = () => {

  const navigate = useNavigate();

  const navigateToProfile = () => {
    navigate('/profile');
  }

  const[state,setState]=useState("")
  useEffect(()=>{
    async function getPostsApi(){
      try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
         response.json().then((res)=>{
          // console.log(res);
          
          setState(res);
         })
        // console.log(response)
      }
      catch(error){
        console.log("Error",error);
      }
    }
    getPostsApi();
  },[])

  //Array of an object Slice method call
  const val = state.slice(0,2);
  console.log(val);

  
  return (
    <div className='user-directory'>
          {/* <div className='title-directory'>Directory</div>

          <div className='user-directory-wrap' onClick={navigateToProfile}>
              <div className='title'>Name: Person</div>
              <div className='posts'>Posts: 12</div>
          </div> */}
          {val && val.map((user)=>{
            // console.log(user.userId);
            return(
                  <div className='user-directory-wrap' key={user.id} onClick={navigateToProfile}>
                    {/* <div>{user?.title}</div> */}
                    {/* <div>{user?.body}</div> */}
                    <div className='title' style={{fontSize:"12px",fontWeight:"500"}}>Name: {user.title}</div>
                    <div className='posts'>Posts: 12</div>
                  </div>
             
            )

          })}
    </div>
  )
}
export default UserDirectory