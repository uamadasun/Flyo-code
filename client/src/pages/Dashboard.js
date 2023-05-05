import React, {useContext, useEffect}from 'react'
import { LoginContext } from '../App'
import { useAuthContext } from '../context/AuthContext'
// import { removeToken } from '../helpers'
import { useNavigate } from 'react-router-dom'



const Dashboard = () => {
    const logged = useContext(LoginContext)
    const {user} = useAuthContext();
    const navigate = useNavigate();

    // Add validation for if a logged in user tries to manually access a dashboard with the wrong id as the parameter.

    useEffect(()=>{
        if (user === undefined){
            // console.log(user)
            navigate(`/login`)
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