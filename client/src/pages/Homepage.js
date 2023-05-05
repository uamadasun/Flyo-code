import React, {useState, useContext} from 'react'
import { gql, useQuery } from '@apollo/client';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { setToken } from '../helpers';
import axios from 'axios';
import { LoginContext } from '../App';

const Homepage = () => {

  const navigate = useNavigate();
    const {user, setUser} = useAuthContext();
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState("");
    const [logged, setLogged] = useContext(LoginContext)

    const {loading, error, data } = useQuery(gql`
        query GetProducts {
          products {
            data {
              attributes {
                product_name
              }
            }
          }
        }
        `);

    if (loading)  return "Loading...";
    if (error) return `Error! ${error.message}`;
    // console.log(`${logged}`)

  return (
    <div>

    </div>
  )
}

export default Homepage;