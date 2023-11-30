import React,{useState} from "react";

const DigitalClock = () => {
    // let time = new Date().toLocaleTimeString();
    const[currtime,setCurrtime] = useState("")

    function handleTime(){
        let time=new Date().toLocaleTimeString();

        setCurrtime(time)
    }

    setInterval(function(){
        handleTime();
    })
    return(
        <div className="digital-clock absolute-center">
            <h1>{currtime}</h1>
        </div>
    )
}
export default DigitalClock;



