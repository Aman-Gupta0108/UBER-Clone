import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
export default function UserLogin() {
  const { register, handleSubmit } = useForm();

  return (
    <>
      <div className="p-7 flex flex-col justify-between h-screen">
        <div>
          <form>
            <h3 className="text-lg font-medium mb-2 ">What's your email</h3>

            <input
              type="email"
              required
              className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
              placeholder="email@example.com"
            />

            <h3 className="text-lg font-medium mb-2">Enter password</h3>

            <input
              type="password"
              required
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
          <Link className="bg-green-500 flex items-center justify-center text-[#fff] mb-7 font-semibold rounded px-4 py-2 border w-full text-lg ">
            Sign in as Caption
          </Link>
        </div>
      </div>
    </>
  );
}
