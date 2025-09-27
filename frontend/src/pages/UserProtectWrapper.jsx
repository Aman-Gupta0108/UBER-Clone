import React,{useContext , useEffect ,useState} from "react"
import UserContext, { UserDataContext } from "../context/UserContext"
import { useNavigate } from "react-router-dom"
import axios from 'axios'


export default function UserProtectWrapper({children}){
  
  const token = localStorage.getItem('token')
  const navigate = useNavigate()
  const [ isLoading , setIsLoading ] = useState(true)
  const {user , setUser} = UserContext(UserDataContext)


  useEffect(() => {
    if (!token) {
      navigate("/login")
    }
  }, [token, navigate])
   
axios.get(`${import.meta.env.VITE_BASE_URL}/profile`,{
  headers:{
    Authorization:`Bearer ${token}`
  }
}).then((response)=>{
  const data = response.data;
  setUser(data.user)
  setIsLoading(false)
}).catch((err)=>{
  console.log(err)
  navigate('/login')
})

  if(isLoading){
    <div>Loding...</div>
  }
 

    return(<>
    {children}
    </>)
}