import { Link } from "react-router-dom"
import CaptainDetails from "../components/CaptainDetails"
import RidePopUp from "../components/RidePopUp"
export default function CaptainHome(){
    return (


        <div className="h-screen" >
            <div className="fixed p-3 top-0 flex items-center justify-between w-full">
                <img
                    className="w-16  "
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/500px-Uber_logo_2018.svg.png"
                    alt=""
                /> 
                <Link to={'/captain-logout'} className=" h-10 w-10 bg-white flex items-center justify-center rounded-full">
                <i className="text-lg font-medium ri-logout-box-r-line"></i>
                </Link>
            </div>
            <div className="h-3/5">
                <img className="h-full w-full object-cover"
                src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
                    alt=""  />
                </div>

                <div className="h-2/5 p-6">
                  <CaptainDetails/>
                </div>

            <div  className="w-full fixed z-10 bottom-0  px-3 py-6 pt-12 bg-white" >
               <RidePopUp/>
            </div>

            </div>
    
    
    )
}


