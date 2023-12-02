import React, { useEffect,useState } from 'react'
// import { useNavigate } from 'react-router-dom';
import UserData from './user-data';
// import { UserDataContext } from './context';


const UserDirectory = () => {

    const[state,setState]=useState("");
    useEffect(()=>{
      async function getUsersApi(){
        try{
          const response = await fetch("https://jsonplaceholder.typicode.com/users");
          response?.json()?.then((res)=>{
            // console.log(res);
            setState(res);
          })
        }
        catch(error){
          console.log("Error!!!from userApi",error);
        }
      }
      getUsersApi();
    },[])

  
    // here will try array method 
    const val = state.slice(0,1);
    // console.log(val);

    return (
        <div>
            {val && val.map((data)=>{
              // console.log(data);
              return (
                <>
                  <UserData data={data} />
                </>
              )     
            }
            )}
        </div>
    )
}

export default UserDirectory;