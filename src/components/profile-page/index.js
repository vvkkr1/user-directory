import React,{useEffect,useState} from 'react'
// import { UserDataContext } from '../../user-directory-page/user-data/context'
import ProfileData from "../profile-page/profile-data/index"

const UserProfile = () => {

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
    // console.log("--------------------")
},[])
  
//Array of an object Slice method call
const val = state.slice(0,1);
// console.log(val);

return(
    <>
      {val && val.map((state,i)=>{
        // console.log(state)
        return <ProfileData state={state} key={i}/> 
      }
      )}
    </>
  )
}
export default UserProfile;
