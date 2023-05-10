import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo&curve.svg";
import userCircle from "../assets/User_cicrle_duotone_line.svg";
import "../SiteHeader.css";
import { LoginContext } from "../App";
import { useAuthContext } from "../context/AuthContext";
import { removeToken } from "../helpers";
import SearchBar from "./SearchBar";
import SearchBarMobile from "./SearchBarMobile";
// import '../Homepage.css'
import Sidebar from "./Sidebar";
import '../Sidebar.css'

export default function SiteHeader() {
  const [logged, setLogged] = useContext(LoginContext);
  const { user, setUser } = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    removeToken();

    setUser(null);
    setLogged(null);
    navigate("/");
  };

  useEffect(() => {
    // console.log(user)
    // console.log(logged)
  });

  return (
    <div className="site-header head-container bg-white big">
      <header>
        {/* <Link to="/">
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

          <Link to="/login">
            <button className="account-icon">
              <img
                className="account-photo"
                src={userCircle}
                alt="user profile default pic"
              />
            </button>
          </Link>

          <button onClick={handleLogout}>Logout</button>
        </account> */}

        <div className="navbar bg-base-0">
          <div className="navbar-start">
            <Link to="/">
              <img src={logo} alt="logo for flyo" className="logo" />
            </Link>
            <h1 className="slogan"> Start your vacation shopping!</h1>
          </div>
          
{/* MOBILE SIDEBAR HEADER NAVBAR OPTIONS*/}
          <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Sidebar />
          </div>
{/* COMPUTER HEADER NAVBAR OPTIONS */}
          <div className="navbar-center align flex">
            <account>
              <ul className="menu menu-horizontal">
                <li>
                  <button className="buyeraccount">
                    <p className="buyer-button">Buyer</p>
                  </button>
                </li>

                <li>
                  <button className="traveleraccount">
                    <p className="traveler-button">Traveler</p>
                  </button>
                </li>

                <li tabIndex={0} className="long-menu bg-base-white">
                  <a className=" justify-around">
                    <button className="account-icon">
                      <img
                        className="account-photo"
                        src={userCircle}
                        alt="user profile default pic"
                      />
                    </button>
                  </a>

                  {logged ? (
                    <ul className="p-2">
                      <li>
                        <a>Profile</a>
                      </li>

                      <li>
                        <a>Request List</a>
                      </li>

                      <li>
                        <a>Buying List</a>
                      </li>

                      <li>
                        <a>Account Settings</a>
                      </li>

                      <li>
                        <p onClick={handleLogout}>Logout</p>
                      </li>
                    </ul>
                  ) : (
                    <ul>
                      <li>
                        <Link to="/login">Login</Link>
                      </li>
                      <li>
                        <Link to="/registration">Register</Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            </account>
          </div>
          <div className="navbar-end logout-button"></div>
        </div>
      </header>
      <SearchBar />
    </div>
  );
}
