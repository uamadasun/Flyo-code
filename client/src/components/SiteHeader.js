import {useContext, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import  logo  from "../assets/logo&curve.svg"
import userCircle from "../assets/User_cicrle_duotone_line.svg";
import arrow from "../assets/Arrow.svg"
import searchIcon from "../assets/Search-icon-1.svg"
import "../SiteHeader.css"
import { LoginContext } from "../App";
import { useAuthContext } from "../context/AuthContext";
import { removeToken } from "../helpers";

export default function SiteHeader() {
  const [logged, setLogged] = useContext(LoginContext)
  const {user, setUser} = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    removeToken();
    setUser(undefined)
    setLogged(undefined)
    navigate('/')
  }

  

  return (
    <div className="site-header head-container">
      <header>
          <Link to='/'>
            <img src={logo} alt="logo for flyo" />
          </Link>
        

        <h1 className="slogan"> Start your vacation shopping!</h1>

        <account>
          <button className="buyeraccount">
            <p className="buyer-button">Buyer</p>
          </button>
          <button className="traveleraccount">
            <p className="traveler-button">Traveler</p>
          </button>
          
          <Link to='/login'>
            <button className="account-icon">
              <img
                className="account-photo"
                src={userCircle}
                alt='user profile default pic'
              />
            </button>
          </Link>
          {logged ? <button onClick={handleLogout}>Logout</button> : <Link to='/login'>Login</Link> }
          
          
        </account>
      </header>

      <searching>

        <div className="left-searching"></div>

        <div className="countrybar">
          <div className="shopat">
            <p>Shop at</p>
          </div>
          <img className="arrow" src={arrow} alt="arrow"/>
          <div className="deliverto">
            <p>Deliver to</p>
          </div>

          <button className="go">
            <p className="go-p"> GO</p>
          </button>

        </div>

        <div className="search">
          <input className="search-bar" type="text" placeholder="Search"/>
          <img src={searchIcon} alt="search icon"/>
        </div>


    </searching>

      
    </div>
  );
}
