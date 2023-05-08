import {useContext, useEffect, useState} from 'react'
import '../Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { LoginContext } from '../App';
import axios from 'axios';
import { API } from '../constant';
import { setToken } from '../helpers';
import Registration from './Registration';
import { useAuthContext } from '../context/AuthContext';

export const Login = () => {
    const navigate = useNavigate();
    const {user, setUser} = useAuthContext();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [logged, setLogged] = useContext(LoginContext)
    // TO-DO: figure out why logged in users can manually go to /login route and it logs them out.

    const [initialUser, setInitialUser] = useState({
        username: "",
        password: "",
    })

    useEffect(()=>{
        if (user !== undefined){
            // console.log(user)
            navigate(`/dashboard/${user.user.id}`)
        }
    })
    

    const handleInputChange = (e) => {
        setInitialUser({
            ...initialUser,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitHandler = async(e) => {
        e.preventDefault();
        setLoading(true);
        axios.post(`http://localhost:1337/api/auth/local`, initialUser)
        .then(res => {
            setLogged(res.data)
            setUser(res.data)
            navigate(`/dashboard/${res.data.user.id}`)
        })
        .catch(err => {
            // console.log(err.response)
            // console.log(`You've hit an error!`)
            setError(err.response.data.error.message)
            // console.log(err.response.data.error.message)
        })
        
    }



  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 login">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={onSubmitHandler}>
          {error ? error : ""}
            <div>
              <label htmlFor="identifier" className="block text-sm font-medium leading-6 text-gray-900">
                Username
              </label>
              <div className="mt-2">
                <input
                  id="identifier"
                  name="identifier"
                  type="identifier"
                  autoComplete="identifier"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
           Don't have an account?{' '}
            <Link to='/registration' className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Register here
            </Link>
          </p>
        </div>
      </div>
  )
}
