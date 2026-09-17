import { useState,useEffect } from "react";

function Time(){
    const [time, setTime] = useState(new Date());
    
    useEffect(()=>{
        const interval=setInterval(()=>{
            setTime(new Date());
        },1000);
        return()=>{
            clearInterval(interval);
        }
    },[])
    return <p>This is the current time : {time.toLocaleDateString()} - {time.toLocaleTimeString()} </p>
    
}
export default Time;