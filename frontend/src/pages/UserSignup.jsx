import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
export default function UserSignup() {
const { register, handleSubmit } = useForm();

const [userData, setUserData] = useState({})

const submitHandler = (data)=>{
    setUserData({
    userName:{
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
           <img className="w-16 mb-10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/500px-Uber_logo_2018.svg.png" alt="" />
          <form onSubmit={handleSubmit(submitHandler)}>
            <h3 className="text-lg font-medium mb-2 ">What's your name</h3>

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

            <h3 className="text-lg font-medium mb-2 ">What's your email</h3>
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
             <Link to={'/login'} className="text-blue-600">Login here</Link>
          </p>
        </div>

        <div className="w-full ">

         <p className="text-[10px] leading-tight">This site is protected by reCaptach and the <span className="underline">Google Privacy Policy</span>and <span className="underline">terms of service apply</span> </p> 
        </div>
      </div>
    </>
  );
}