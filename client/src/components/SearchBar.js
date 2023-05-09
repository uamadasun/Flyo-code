import React from "react";
import arrow from "../assets/Arrow.svg";
import searchIcon from "../assets/Search-icon-1.svg";
import "../SearchBar.css";

const SearchBar = () => {
  return (
    <div>
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

        <div className="search ">
          <input className="md:hidden lg:flex sm:hidden search-bar" type="text" placeholder="Search" />
          <img src={searchIcon} alt="search icon" className="md:hidden lg:flex sm:hidden"/>
        </div>
      </searching>
    </div>
  );
};

export default SearchBar;
