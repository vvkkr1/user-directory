import React,{useEffect,useState} from 'react'
import DigitalClock from '../clock';
import "./countryClock.css";

const CountryClock = () => {
const[countryapi,setCountryApi] = useState("");
    useEffect(()=>{
        async function getCountry(){
              try{
                fetch("http://worldtimeapi.org/api/timezone")
                .then((response)=>{
                  response.json().then((res)=>{
                    // console.log("__________________________________________",res);
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
    
const[value, setValue]=useState("")


// console.log(value)
    return (
      <div className='country-clock'> 
          <div className='country-clock-wrap'>
            <div className='absolute-center'>
              <select onChange={(e)=>{setValue(e.target.value)}}> 
                {countryapi 
                    ? countryapi.map((country,i)=>{
                      // console.log(country)
                  return <option key={i} value={country}>{country}</option>
                  
                }) 
                : null} 
              </select>
              <div style={{padding:"10px 30px"}}>
                <div>{value}</div>
              </div>
            </div>  

            {/* <div className='absolute-center'>
                <DigitalClock/>    
            </div> */}
          </div>
      </div>
    )
}

export default CountryClock;