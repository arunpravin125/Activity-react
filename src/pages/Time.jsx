import React from 'react'
import { useState,useEffect } from 'react'

function Time() {
    let [time,settime]=useState(new Date())
    useEffect(()=>{
        let intervalid=setInterval(()=>{
            settime(new Date())
        }
            ,1000);
        return ()=>{
            clearInterval(intervalid)
        }
    },[])
    function formatTime(){
        let hours=time.getHours()
        let minutes=time.getMinutes()
        let seconds=time.getSeconds()
        let maridian=hours>=12?"PM":"AM"

        hours=hours%12||12
        return `${addzero(hours)}:${addzero(minutes)}:${addzero(seconds)}:${addzero(maridian)}`
    }

    function addzero(number){

        return (number<10?"0":"")+number

    }
    function date(){
        let date=time.getDate();
        let month=time.getMonth()+1;
        let year=time.getFullYear()
        return `${addnum(date)}:${addnum(month)}:${addnum(year)}`
    }
    function addnum(num){

        return (num<10?"0":"")+num

    }

  return (
    <div className="flex flex-col  gap-3 bg-transparent p-10 flex-wrap md:flex-row">
        <div className="p-10 flex-grow border rounded-md bg-lime-300 text-center">
            <h1>{date()}</h1>
            <p>Chennai</p>
        </div>
        <div className="p-10 flex-grow border rounded-md bg-violet-400 text-center">
        <h1>Time</h1>
        <h1>{formatTime()}</h1>
        </div>
        <div className="p-10 flex-grow border rounded-md bg-rose-300 text-center">
            <h1>Build Using</h1>
            <p>React</p>
        </div>
       

      
    </div>
  )
}

export default Time
