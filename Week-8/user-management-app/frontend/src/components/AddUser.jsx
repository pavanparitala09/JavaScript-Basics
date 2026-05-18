import React from 'react'
import {useForm} from 'react-hook-form'
function AddUser() {
  const {register, handleSubmit,formState:{errors}} = useForm()

    const onUserCreate = (newUser) =>{
        console.log(newUser)

        let res = fetch('http://localhost:3000/user-api/users',{
            method:'POST',
            body: JSON.stringify(newUser),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        res.then(response => response.json()).then(data => {
            console.log(data)
        })


    }


  return (
    <div>
        <h1 className='text-5xl text-center text-blue-500'>Add User</h1>
        <div className='flex justify-center mt-10'>
            <form onSubmit={handleSubmit(onUserCreate)} className='flex flex-col max-width'> 
       <input className='border-2 p-2 m-2' type="text" {...register("name", {required: true})} placeholder="Username"></input>
        <input className='border-2 p-2 m-2' type="email" {...register("email", {required: true})} placeholder="email"></input>
         <input className='border-2 p-2 m-2' type="date" {...register("dateOfBirth", {required: true})} placeholder="dob"></input>
          <input className='border-2 p-2 m-2' type="number" {...register("mobileNumber", {required: true})} placeholder="Phone"></input>
           <button className='bg-green-200 p-2 mt-5 border-2' type="submit">Submit</button>
            </form>
        </div>
    </div>
  )}

export default AddUser