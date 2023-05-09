import React from "react";
import searchIcon from "../assets/Search-icon-1.svg";
import "../SearchBarMobile.css";

const SearchBarMobile = () => {
  return (
    <div className="search-mobile">
      <input className="search-bar-mobile" type="text" placeholder="Search" />
      <img src={searchIcon} alt="search icon" />
    </div>
  );
};

export default SearchBarMobile;
