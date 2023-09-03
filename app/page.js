"use client"
import React, { useState } from 'react'

const page = () => {

 const [title, settitle] = useState("")
 const [description, setdescription] = useState("")
 const [mainTask, setmainTask] = useState([])
 const Submit = (e) => {
    e.preventDefault();
    //Storing the data here just two things
    setmainTask([...mainTask, {title,description}])
    settitle("");
    setdescription("");
 }
 const Deletehandler = (i) =>{
  let copy_task = [...mainTask];
  // kisko delete krna hai + count
  copy_task.splice(i,1);
  setmainTask(copy_task);
 }
 let renderTask = <h2>No task Availble</h2>;

 if(mainTask.length > 0){
  renderTask = mainTask.map( (t,i) => {
  return( 
    <li key={i} className=' flex justify-between items-center'>
    <div className=' flex justify-between mb-5 w-2/3 items-center'>
    <h5 className='text-2xl font-semibold'>{t.title}</h5>
    <h6 className='text-lg font-semibold'>{t.description}</h6>
    </div>
    <button 
    className=' text-white bg-red-400 rounded text-xl font-bold py-2 px-4' 
    onClick={()=>{
      Deletehandler(i)
    }}>
    Delete</button>
    </li>
    )
 });}
  return (
    <>
      <h1 className=' text-[#F1F6F9] bg-[#212A3E] text-5xl text-center p-3 font-bold'>To-Do List</h1>
      <form onSubmit={Submit}>
        <input 
        type='text'
        placeholder='Enter Title here'
        className=' text-2xl border-4 border-[#394867] text-[#394867] px-4 py-2 m-8'
        value={title}
        // two way binding using the change we make displayed to the input not directly in box.
        onChange={(e)=>{
          settitle(e.target.value)
        }}
        />
        <input 
        type='text'
        placeholder='Enter Description here'
        className=' text-2xl border-4 border-[#394867] text-[#394867] px-4 py-2 m-8'
        value={description}
        onChange={(e)=>{
          setdescription(e.target.value)
        }}
        />
        <button className=' bg-[#212A3E] text-[#F1F6F9] px-4 py-3 text-2xl rounded font-bold m-5'>Add Task</button>
      </form>
      <hr/>
      <div className=' bg-slate-400 p-8 text-[#F1F6F9] text-2xl'>
          <ul>
            {renderTask}
          </ul>
      </div>
    </>
  )
}

export default page