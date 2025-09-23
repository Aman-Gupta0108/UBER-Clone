// import React, { useEffect } from "react"
// import axios from "axios"
// import { useNavigate } from "react-router-dom"
// export default function UserLogout(){
    
//     const navigate = useNavigate()
//         useEffect(()=>{
//         const logout = async ()=>{
//         const token = localStorage.getItem('token')
//         // console.log(token)
//         try {  
        
//         const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/users/logout`,{
//         headers:{
//             Authorization: `Bearer ${token}`
//         }
//     })
//     if(response.status === 200){
//         localStorage.removeItem('token')
//         navigate('/login')
//     }

// } catch (error) {
//          console.log(error)   
//         }
//     }
//     logout()

//     },[navigate])
    
//     return (<> user logout </>)
// }


import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const UserLogout = () => {

    const token = localStorage.getItem('token')
    const navigate = useNavigate()

    axios.get(`${import.meta.env.VITE_API_URL}/users/logout`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then((response) => {
        if (response.status === 200) {
            localStorage.removeItem('token')
            navigate('/login')
        }
    })

    return (
        <div>UserLogout</div>
    )
}

export default UserLogout