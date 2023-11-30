import React, { useEffect,useState } from 'react'
import "./userData.css";



const UserData = () => {

const[countryapi,setCountryApi] = useState("");
useEffect(()=>{
    async function getCountry(){
          try{
            fetch("http://worldtimeapi.org/api/timezone")
            .then((response)=>{
              response.json().then((res)=>{
                console.log(res);
                setCountryApi(res);
              })
            })
          }
          catch(error){
              console.log("Error",error)
          }
      }
    getCountry();
  },[])
  
  return (
    <div>
      This is user data api 
      {countryapi && countryapi.map((country)=>{
        return(
          <div>
            <h2>{country}</h2>
          </div>
        )
      })}
    </div>
  )
}

export default UserData;