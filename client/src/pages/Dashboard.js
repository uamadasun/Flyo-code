import React, {useContext, useEffect}from 'react'
import { LoginContext } from '../App'
import { useAuthContext } from '../context/AuthContext'
// import { removeToken } from '../helpers'
import { useNavigate } from 'react-router-dom'


const Dashboard = () => {
    const logged = useContext(LoginContext)
    const {user} = useAuthContext();
    const navigate = useNavigate();

    useEffect(()=>{
        if (logged === null || logged === undefined) {
            navigate("/login", { replace: true })
        }
    })

  return (
    <div>
        {user ? 

        <div>User {user.user.first_name}</div>

        :
        "why are you here"
    
        
        }

    </div>
    
    
  )
}

export default Dashboard