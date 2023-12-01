import React,{useState} from "react";
import "./clock.css";

const DigitalClock = () => {
    // let time = new Date().toLocaleTimeString();
    const[currtime, setCurrtime] = useState("")

    function handleTime(){
        let time=new Date().toLocaleTimeString();

        setCurrtime(time)
    }
    

    setInterval(function(){
        handleTime();
    })


    return(
        <div className="digital-clock absolute-center">
            <div className="time">
                <h1>{currtime}</h1>
            </div>
            <div className="time-pause-start-btn">
                <button>Pause</button>
            </div>
        </div>
    )
}
export default DigitalClock;



