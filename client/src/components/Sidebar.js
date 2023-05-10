import React, { useContext, useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { removeToken } from "../helpers";
import { LoginContext } from "../App";
import userCircle from "../assets/User_cicrle_duotone_line.svg";
import "../Sidebar.css";
import searchIcon from "../assets/Search-icon-1.svg";
import '../SearchBarMobile.css'


const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [logged, setLogged] = useContext(LoginContext);
  const { user, setUser } = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    removeToken();

    setUser(null);
    setLogged(null);
    navigate("/");
  };

  return (
    <>
      {showSidebar ? (
        <button
          className="flex text-4xl text-white items-center cursor-pointer fixed right-10 top-6 x-button"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      ) : (

        <svg
          onClick={() => setShowSidebar(!showSidebar)}
          xmlns="http://www.w3.org/2000/svg" 
          className="sidebar-svg fixed z-30 flex items-center cursor-pointer right-10 top-6"
          fill="black"
          viewBox="0 0 200 80"
          width="40"
          height="40"
          stroke-width="1.5" 
          stroke="currentColor" 
        >
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg>
      )}

      <div
        className={` sidebar top-0 right-0 w-[35vw] bg-blue-600  p-10 pl-20 text-white fixed h-full ease-in-out duration-300 ${
          showSidebar ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <ul>
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
          <hr/>

          {logged ? (
            <div>
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
            </div>
          ) : (
            <div>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/registration">Register</Link>
              </li>
            </div>
          )}
          
          <div className="search-mobile ">
          <input className="search-bar-mobile" type="text" placeholder="Search" />
          <img src={searchIcon} alt="search icon"/>
        </div>
          
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
