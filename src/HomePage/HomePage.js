import React, { useEffect, useState } from 'react';
import "./HomePage.css"

const HomePage = () => {
    const[counter,setCounter] = useState(0);
    const[timer, setTimer] = useState(0);
    useEffect(()=>{
        if(timer === 0) return;
        let interval = setInterval(()=>{
            setTimer(timer-1);
        },1000);
        return () => {
            clearInterval(interval);
        }
    },[timer]);
  return (
    <div>
      <div className="home-container">
        <div className="home-timer">timer: {timer}</div>
        <div className="home-count">{counter}</div>
        <button className="home-btn-start btn" 
            onClick={()=>{
                setTimer(10);
                setCounter(0);
            }}
            disabled={timer !== 0}
        >start</button>
        <button className="home-btn-click btn"
            onClick={()=>setCounter(counter+1)}
            disabled={timer === 0}
        >click me</button>
        <button className="home-btn-reset btn"
            onClick={()=>{
                setTimer(0);
                setCounter(0);
            }}
        >reset</button>
      </div>
    </div>
  )
}

export default HomePage
