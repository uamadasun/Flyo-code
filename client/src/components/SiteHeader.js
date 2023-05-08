import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo&curve.svg";
import userCircle from "../assets/User_cicrle_duotone_line.svg";
import arrow from "../assets/Arrow.svg";
import searchIcon from "../assets/Search-icon-1.svg";
import "../SiteHeader.css";
import { LoginContext } from "../App";
import { useAuthContext } from "../context/AuthContext";
import { removeToken } from "../helpers";

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
    <div className="site-header head-container bg-white">
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
              <img
                src={logo}
                alt="logo for flyo"
                className="logo"
                // className="btn logo btn-ghost"
              />
            </Link>
            <h1 className="slogan"> Start your vacation shopping!</h1>
            
            </div>
            
            <div className="dropdown navbar-end">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>

              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-auto"
              >
                <li>
                  <button className="btn buyeraccount">
                    Buyer
                  </button>
                </li>
                <button className=" btn traveleraccount">
                  Traveler
                </button>
                <li tabIndex={0}>
                  <a className="testing justify-between">
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
          </div>




          <div className="navbar-center align hidden lg:flex ">
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

      <searching>
        <div className="left-searching"></div>

        <div className="countrybar">
          <div className="shopat">
            <p>Shop at</p>
          </div>
          <img className="arrow" src={arrow} alt="arrow" />
          <div className="deliverto">
            <p>Deliver to</p>
          </div>

          <button className="go">
            <p className="go-p"> GO</p>
          </button>
        </div>

        <div className="search">
          <input className="search-bar" type="text" placeholder="Search" />
          <img src={searchIcon} alt="search icon" />
        </div>
      </searching>
    </div>
  );
}
