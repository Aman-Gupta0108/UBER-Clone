import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function CaptainSignup() {
const { register, handleSubmit } = useForm();

const [userData, setUserData] = useState({})

const submitHandler = (data)=>{
    setUserData({
    fullName:{
        firstName:data.firstName,
        lastName:data.lastName,
    },
    email:data.email,
    password:data.password
    })



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

            <button className="bg-[#111] text-[#fff] mb-7 font-semibold rounded px-4 py-2 border w-full text-lg ">
              Loging
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