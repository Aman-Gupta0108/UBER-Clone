import React,{useContext , useEffect , useState} from "react"
import { CaptainDataContext } from "../context/CaptainContext"
import { useNavigate } from "react-router-dom"
import axios from "axios"

export default function CaptainProtectWrapper({children}){

    
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const {captain,setCaptain} =useContext(CaptainDataContext)
    const [ isLoading,setIsLoading ] = useState(true)

  useEffect(() => {
    if (!token) {
      navigate("/captain-login")
    }
  }, [token, navigate])
  
//   implement user authontation from server  in user protect wrapper 
// implement logout route for captain 

  axios.get(`${import.meta.env.VITE_BASE_URL}/captain/profile`,{
    headers:{
        Authorization:`Bearer ${token}`
    }
  }).then((response)=>{
    if(response.status === 200 ){
        const data = response.data
        setCaptain(data.captain)
        setIsLoading(false)
    }
  }).catch(err => {
    console.log(err)
    localStorage.removeItem('token')
    navigate('/captain-login')
  })

if(isLoading){
    return (
        <div>Loading...</div>
    )
}
    return(<>
    {children}
    </>)
}