import React from 'react'
import { useState } from 'react'
import Time from './Time'
import { useLocation } from 'react-router-dom'

function Todo() {
    let [input,setinput]=useState("")// 1st input
    let [store,setstore]=useState(["I wake up at 7:00am"])
    let [editValue,seteditValue]=useState("")//index value
    // let [stext,setstext]=useState("")// edit text
    let [editInput,seteditInput]=useState("")// inputedit
    let [warning,setwarning]=useState(false)
    let data=useLocation()
    console.log(data.state.user)
   
    console.log(store)
    function handleInput(eve){
        setinput(eve.target.value)
    }
    function handleAdd(){
        if(input){
            setstore([...store,input])
            console.log("Your input is written")
            setwarning(false)

        }
        else{
            console.log("please write any thing")
            setwarning(true)

        }
 


        setinput("")
    }
    function handleEdit(ind){
        seteditValue(ind)
        seteditInput(store[ind])
       
    }
    function handleEditInput(eve){
        seteditInput(eve.target.value)
    }
    function handleSave(index){
        var updatedvalue=[...store]
        updatedvalue[index]=editInput
        setstore(updatedvalue)
        seteditValue("")
        seteditInput("")
       
    }
    function handleDelete(ind){
        setstore(store.filter(function(data,index){
            return index!==ind

        }))

    }
  return (
    <div className="p-2  bg-yellow-100">
        <h1 className="text-center text-3xl">Todo Activities :)</h1>
        <h1 className="text-center mt-4 text-3xl">Welcome {data.state.user}</h1>
       
        <div className="">
       
            <Time></Time>
        </div>
        
        <div className="p-1 mx-10">
        <h1 className="text-2xl text-violet-500">Enter Activities</h1>
            
        {warning?<p className= " font-bold text-red-900">Please write Activity :|</p>:""}
        <input className="p-2  my-2 border-2 border-lime-300" type="text" placeholder='enter activities' value={input} onChange={handleInput}></input>
        <button className=" p-2  border-2  font-bold bg-lime-300  hover: bg-green-100 text-green-900" onClick={handleAdd}>Add</button>

        {
            store.length===0?<p className="text-2xl font-bold text-blue-500">please Add activities :)</p>:
            store.map(function(data,index){
                return <div key={index}>
                    {
                        editValue===index?
                        <div className="bg-blue-300 p-1 border rounded-md flex gap-5 justify-between ">
                            <input className="p-1 w-32  border-blue-300 border rounded-md" value={editInput} onChange={handleEditInput}></input>
                            <button className="text-orange-600 p-1" onClick={()=>handleSave(index)}>Save</button>

                        </div>:
                        <div className="bg-green-300 p-2 border rounded-md flex gap-5 my-2 justify-between " key={index}>
                            <div className="flex flex-wrap"> 
                            <span className="my-2">{index+1}.{data}</span>

                            
                           
                             <button className=" mx-3 text-blue-600" onClick={()=>handleEdit(index)} >Edit</button>
                             <button className="text-red-500" onClick={()=>handleDelete(index)}>Delete</button>

                                </div>
                            
                        </div>
                       
                    }

                </div>
            })
        }
        </div>
      
    </div>
  )
}

export default Todo
