import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link ,useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import React from "react";
import axios from 'axios'

export default function CaptainSignup() {
const navigate = useNavigate()
const { register, handleSubmit } = useForm();
const [userData, setUserData] = useState({})
const {captain , setCaptain} = React.useContext(CaptainDataContext)

const submitHandler = async (data)=>{
    
   const CaptionData = {
    fullname:{
        firstname:data.firstName,
        lastname:data.lastName,
    },
    email:data.email,
    password:data.password,
    vehicle:{
      color:data.vehicleColor,
      plate:data.vehiclePlate,
      capacity:data.vehicleCapacity,
      vehicleType:data.vehicleType
    }
    }

 console.log(CaptionData)
 console.log(data)
 const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/register`,CaptionData)
 console.log(response)
    if(response.status === 201){
      const data = response.data
      setCaptain(data.captain)
      localStorage.setItem('token',data.token)
      navigate('/captain-home')
    }
}
  return (
    <>
      <div className="p-10 flex flex-col justify-between h-screen">
        <div>
           <img className="w-20 mb-3" src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />
          <form onSubmit={handleSubmit(submitHandler)}>
            <h3 className="text-lg font-medium mb-2 ">What's our Caption's name</h3>

            <div className="flex gap-4 mb-6">
            <input
              type="text"
              {...register('firstName')}
              required
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"
              placeholder="First name"
              />

              <input
              type="text"
              {...register('lastName')}
              required
              className="bg-[#eeeeee] w-1/2  rounded px-4 py-2 border  text-lg placeholder:text-base"
              placeholder="Last name"
              />

              </div>

            <h3 className="text-lg font-medium mb-2 ">What's our Caption's email</h3>
            <input
              type="email"
              {...register('email')}
              required
              className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
              placeholder="email@example.com"
            />

            <h3 className="text-lg font-medium mb-2">Enter password</h3>

            <input
              type="password"
              required
              {...register('password')}
              className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
              placeholder="password..."
            />




 <h3 className='text-lg font-medium mb-2'>Vehicle Information</h3>
          <div className='flex gap-4 mb-7'>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="text"
              placeholder='Vehicle Color'
              {...register('vehicleColor')}
            />
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="text"
              placeholder='Vehicle Plate'
             {...register('vehiclePlate')}
            />
          </div>

<div className='flex gap-4 mb-7'>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="number"
              placeholder='Vehicle Capacity'
             {...register('vehicleCapacity')}
            />
            <select
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
             {...register('vehicleType')}
            >
              <option value="" disabled>Select Vehicle Type</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="moto">Moto</option>
            </select>
          </div>




            <button className="bg-[#111] text-[#fff] mb-7 font-semibold rounded px-4 py-2 border w-full text-lg ">
              Create Captain Account
            </button>
          </form>
          <p className="text-center">
            Alredy have a account? 
             <Link to={'/captain-login'} className="text-blue-600">Login here</Link>
          </p>
        </div>

        <div className="w-full ">

         {/* <p className="text-[10px] leading-tight">By proceeding, you consent to get calls, WhatsApp or SMS messages, including by automated means, from Uber and its affiliates to the number provided. </p>  */}
         <p className="text-[10px] leading-tight">This site is protected by reCaptach and the <span className="underline">Google Privacy Policy</span>and <span className="underline">terms of service apply</span> </p> 
        </div>
      </div>
    </>
  );
}