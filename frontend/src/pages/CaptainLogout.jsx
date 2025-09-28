import React from "react"
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CaptainLogout(){
    const navigate = useNavigate()
    const token = localStorage.getItem('token')

    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_BASE_URL}`,{
            headers:{
                authorization:`Bearer ${token}`,
            }
        }).then((response)=>{
            if(response.status === 200){
                localStorage.removeItem('token')
            navigate('/captain-login')
            }
        }).catch((err)=>{
            console.log(err)
            localStorage.removeItem('token')
            navigate('/captain-login')
        })
    },[])

    return(
    <> hello </>
)
}
export default CaptainLogout;


