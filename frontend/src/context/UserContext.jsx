import React from 'react'
import { createContext ,useState } from 'react'

export const UserDataContext = createContext()

const UserContext = ({children})=>{
    //parent component ke pass child component props ke through aate hai 

    const [user,setUser] = useState({
        email:'',
        fullName:{
            firstName:'',
            lastName:'',
        }
    })

    return(
        <div>
          <UserDataContext.Provider>
            {children}
          </UserDataContext.Provider>
        </div>
    )
}
export default UserContext