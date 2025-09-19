import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
export default function CaptainLogin() {
  const { register, handleSubmit } = useForm();
const submitHandler = (data)=>{
console.log(data)
}
  return (
    <>
      <div className="p-7 flex flex-col justify-between h-screen">
        <div>
            <img className="w-16 mb-10" src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />
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
            Join a fleet? <Link to={'/captain-signup'} className="text-blue-600">Register as a captain</Link>
          </p>
        </div>

        <div className="w-full ">
          <Link to={'/login'} className="bg-[#d5622d] flex items-center justify-center text-[#fff] mb-7 font-semibold rounded px-4 py-2 border w-full text-lg ">
            Sign in as User
          </Link>
        </div>
      </div>
    </>
  );
}
