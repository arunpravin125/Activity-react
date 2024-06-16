import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Signup(props) {
    let [username,setusername]=useState("")
    let [userpass,setuserpass]=useState("")
    let users=props.users
    let setusers=props.setusers
console.log(users)
    function handleStore(){
        setusers([...users,{username:username,password:userpass}])
    }
    function handleName(eve){
        setusername(eve.target.value)
    }
    function handlePass(eve){
        setuserpass(eve.target.value)
    }
  return (
    <div className="p-10 bg-yellow-100">
        <div className="p-10 bg-slate-300 border rounded-md">
            <h1>Hey hi</h1>
            <h1>I will manage your activities after Signup :)</h1>
            <div className="my-2 flex flex-col ">
                <input type="text" value={username} onChange={handleName} className="w-52 my-2 bg-transparent p-1 border-black border rounded-md"></input>
                <input type="text" value={userpass} onChange={handlePass} className="w-52 my-2 bg-transparent p-1 border-black border rounded-md"></input>
                <input type="text" className="w-52 my-2 bg-transparent p-1 border-black border rounded-md"></input>
                <button onClick={handleStore} className=" w-28 p-2 border rounded-md bg-blue-500 text-white">SignUp</button>

                <p>you have an Account?<Link className="underline" to="/">Login</Link></p>
            </div>
        </div>
      
    </div>
  )
}

export default Signup
