import { useRef, useState } from "react";
import {useGSAP} from '@gsap/react';
import gsap from "gsap";
import 'remixicon/fonts/remixicon.css'

export default function Home() {
  const [pickup,setPickup]=useState('')
  const [destination,setDestination]=useState('')
  const [panelOpen,setPanelOpen] = useState(false)
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)
  const[]=useState('')
  const submitHandler = (e)=>{
      e.preventDefault()
      console.log(pickup)
      console.log(destination)
  }

  useGSAP(function(){
    if(panelOpen){
      gsap.to(panelRef.current,{
      height:'70%'
    })
    gsap.to(panelCloseRef.current,{
      opacity:1
    })
    }else{
       gsap.to(panelRef.current,{
      height:'0%'
    })
     gsap.to(panelCloseRef.current,{
      opacity:0
    })
    }
  },[panelOpen])
  return (
    <>
      <div className="h-screen relative">
        <img
          className="w-16 absolute left-5 top-5 "
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/500px-Uber_logo_2018.svg.png"
          alt=""
        />

        <div className="h-screen ">
          <img
            className="h-full w-full object-cover"
            src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
            alt=""
          />
        </div>
        <div className=" flex flex-col justify-end h-screen absolute top-0 w-full ">
          <div className="h-[30%] bg-white p-6 relative">
           <h5 ref={panelCloseRef} onClick={()=>setPanelOpen(false)} className="absolute opacity-0 top-6 right-6 text-2xl"> <i className="ri-arrow-down-wide-line"></i></h5>
            <h4 className="text-2xl font-semibold">Find a trip</h4>
            <form onSubmit={(e)=> submitHandler(e) }>
              <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-700 rounded-full"></div>
              <input
                className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5"
                type="text"
                placeholder="Add a Pick-up location"
                value={pickup}
                onClick={()=>{
                  setPanelOpen(true)
                }}
                onChange={(e)=>setPickup(e.target.value)}
              />
              <input
                className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3"
                type="text"
                placeholder="Enter Your destination"
                onClick={()=>{
                  setPanelOpen(true)
                }}
                value={destination}
                onChange={(e)=>setDestination(e.target.value)}
              />
             
            </form>
          </div>

          <div ref={panelRef} className=" bg-red-400 opacity-0  "></div>
        </div>
      </div>
    </>
  );
}
