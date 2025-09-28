import { useForm  } from "react-hook-form";
import { useNavigate,Link } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { UserDataContext } from "../context/UserContext";

export default function UserLogin() {
  const { register, handleSubmit } = useForm();
  const {user , setUser}= useContext(UserDataContext);
  const navigate = useNavigate()

  const submitHandler = async (data)=>{
    const userData =  {
    email:data.email,
    password:data.password
    }

const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`,userData)
console.log(response)
  if(response.status === 200){
    setUser(response.data.user)
    // console.log(response)
    localStorage.setItem('token',JSON.stringify(response.data.token))
    navigate('/home')
  }
  }

    return (
      <>
        <div className="p-10 flex flex-col justify-between h-screen">
          <div>
            <img className="w-16 mb-10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/500px-Uber_logo_2018.svg.png" alt="" />
            <form onSubmit={handleSubmit(submitHandler)}>
              <h3 className="text-lg font-medium mb-2 ">What's your email</h3>

              <input
                type="email"
                {...register('email')}
                required
                className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
                placeholder="email@example.com"
              />

              <h3 className="text-lg font-medium mb-2">Enter password</h3>

              <input
                type="password"
                required
                {...register('password')}
                className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
                placeholder="password..."
              />

              <button className="bg-[#111] text-[#fff] mb-7 font-semibold rounded px-4 py-2 border w-full text-lg ">
                Loging
              </button>
            </form>
            <p>
              New here? <Link to={'/signup'} className="text-blue-600">Create New Account</Link>
            </p>
          </div>

          <div className="w-full ">
            <Link to={'/captain-login'} className="bg-green-500 flex items-center justify-center text-[#fff] mb-7 font-semibold rounded px-4 py-2 border w-full text-lg ">
              Sign in as Caption
            </Link>
          </div>
        </div>
      </>
    );
  }
