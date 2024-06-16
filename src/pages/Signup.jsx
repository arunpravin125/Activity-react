import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Signup(props) {
    let [username,setusername]=useState("")
    let [userpass,setuserpass]=useState("")
    let [userconform,setuserconform]=useState("")
    let [Checkname,setCheckname]=useState(true)
    let [Checkpass,setCheckpass]=useState(true)
    let [Checkconform,setCheckconform]=useState(true)
    let [passconform,setpassconform]=useState(true)
    let users=props.users
    let setusers=props.setusers
    let landingNav=useNavigate()
console.log(users)
    function handleStore(){
        if(username&&userpass&&userconform){

            username? setCheckpass(true):setCheckpass(false)
            setCheckpass(true)
            setCheckname(true)
            setCheckconform(true)

            if(userpass===userconform){
                setpassconform(true)
                setusers([...users,{username:username,password:userpass}])
                landingNav("/ ")
                console.log(` Both same password ${userpass} and ${userconform}`)

                console.log(`after SignUp ${{users}}`)


            }
            else{
                setpassconform(false)
                console.log(` Both are different ${userpass} and ${userconform}`)
            }

           
            // setusers([...users,{username:username,password:userpass}])
            // landingNav("/ ")
        }
        else{
            console.log("Please fill the Sign up form")
            userpass? setCheckpass(true):setCheckpass(false)
            username? setCheckname(true):setCheckname(false)
            userconform? setCheckconform(true):setCheckconform(false)
            // setCheckpass(false)
            // setCheckname(false)
            // setCheckconform(false)
           
        }
   
    }
    function handleName(eve){
        setusername(eve.target.value)
    }
    function handlePass(eve){
        setuserpass(eve.target.value)
    }
    function handleConform(eve){
        setuserconform(eve.target.value)
    }
  return (
    <div className=" bg-yellow-100 p-10">
        <div className="bg-[#cdd6d2] p-10 my-20 border rounded-md">
            <h1>Hey hi</h1>
            <h1>I will manage your activities after Signup :)</h1>
            <div className=" flex flex-col ">
                {Checkname?"":<p className="text-red-600">Please fill the Username</p>}
                {Checkpass?"":<p className="text-red-600">Please give the Password</p>}
                {Checkconform?"":<p className="text-red-600">Please conform the Password </p>}
                {passconform?"":<p className="text-3x1 font-semibold text-red-800">Password And Conform Password Want Be Same</p>}

                {/* {
                    CheckValue?"":{username?"":<p>please fill the username</p> &&
                    userpass?"":<p>please give the password</p> &&
                    userconform?"":<p>please conform the password </p>}
                }
                    {/* {username?"":<p>please fill the username</p>}
                   {userpass?"":<p>please give the password</p>} 
                   {userconform?"":<p>please conform the password </p>} */} 
                
                <input type="text" value={username} onChange={handleName} placeholder='entername' className="w-52 my-2 bg-transparent p-1 border-black border rounded-md"></input>
                <input type="password" value={userpass} onChange={handlePass} placeholder='enterpassword' className="w-52 my-2 bg-transparent p-1 border-black border rounded-md"></input>
                <input type="password" value={userconform} onChange={handleConform} placeholder='conformpassword' className="w-52 my-2 bg-transparent p-1 border-black border rounded-md"></input>
                <button onClick={handleStore} className=" w-28 p-2 border rounded-md bg-blue-500 text-white">SignUp</button>

                <p>you have an Account?<Link className="underline" to="/">Login</Link></p>
            </div>
        </div>
      
    </div>
  )
}

export default Signup
