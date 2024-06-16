import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Login(props) {
    let Navigator=useNavigate()
    let users=props.users
    let [inputname,setinputname]=useState("")
    let [inputpass,setinputpass]=useState("")
    let [isCorrect,setisCorrect]=useState(false)


    function handleInput(eve){
        setinputname(eve.target.value)

    }
    function handlepass(eve){
        setinputpass(eve.target.value)
    }

    function handleCheck(){
        var userfound=false
        if(inputname&&inputpass){
            users.forEach(function(check){
                if(check.username===inputname&&check.password===inputpass){
                    console.log("Login success")
                    setisCorrect(false)
                    Navigator("/landing",{state:{user:inputname}})
                    userfound=true
                }
               
            })
            if(userfound===false){
                console.log("login failed")
                    setisCorrect(true)
                
            }
           

        }
        else{
            setinputname("type name")
            setinputpass("type password")
        }
        // users.forEach(function(check){
        //     if(check.username===inputname&&check.password===inputpass){
        //         console.log("Login success")
        //         setisCorrect(false)
        //         Navigator("/landing")
        //         userfound=true
        //     }
           
        // })
        // if(userfound===false){
        //     console.log("login failed")
        //         setisCorrect(true)
            
        // }
        setinputname("")
        setinputpass("")
        setisCorrect(true)
    }
  return (
    <div className="p-10 bg-yellow-100">
        <div className="p-10 bg-slate-300 border rounded-md">
            <h1>Hey hi </h1>
            {
                isCorrect?< p className="text-red-600">Please Enter Correct Name and Password </p>:  <h1>I will manage your activities after Login :)</h1>
            }
          
            <div className="my-2 flex flex-col ">
                <input type="text" value={inputname} placeholder='entername' onChange={handleInput} className="w-52 my-2 bg-transparent p-1 border-black border rounded-md"></input>
                <input type="text" value={inputpass} placeholder='enterpassword' onChange={handlepass} className="w-52 my-2 bg-transparent p-1 border-black border rounded-md"></input>
              
                <button onClick={handleCheck} className=" w-28 p-2 border rounded-md bg-blue-500 text-white">Login</button>

                <p>you dont have an Account?<Link className="underline" to="/signup">SignUp</Link></p>
            </div>
        </div>
      
    </div>
  )
}

export default Login
