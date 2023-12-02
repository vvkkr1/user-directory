import React,{useState} from "react";
import "./clock.css";

const DigitalClock = () => {
    // let time = new Date().toLocaleTimeString();
    const[currtime, setCurrtime] = useState("")

    function handleTime(){
        let time=new Date().toLocaleTimeString();
        
        // console.log(time)
    
        setCurrtime(time);
    }

    
     
      const clearInter = setInterval(function(){
        handleTime();
      })

      const getBlank =  clearInterval(function(){
        clearInter();
      });
    
      function onClickIntervel(){
        getBlank();
      }
    
            
        // alert("dfsd")
        
  


    return(
        <div className="digital-clock absolute-center">
            <div className="time">
                <h1 >{currtime}</h1>
            </div>
            <div className="time-pause-start-btn">
                <button onClick={onClickIntervel}>Pause/Start</button>
            </div>
        </div>
    )
}
export default DigitalClock;



