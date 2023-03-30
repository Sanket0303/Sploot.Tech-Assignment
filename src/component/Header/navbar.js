import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.jpg";
import "./styles.css";
import BasicMenu from "./ProfileMenu";


function Header(token) {
  const [name, setname] = useState([]);


  useEffect(() => {
    fetch('https://api-staging-v2.sploot.space/api/v2/user', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token.auth}`
      }
    })
      .then(response => response.json())
      .then(data => {
        setname(data.data.data)
      })
      .catch(error => {
        throw (error);
      });
  },[]);
  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="navbar-logo" />

      <div className="profile-container">
        <div className="your-home">{name.name}</div>
        <div className="profile-div">
          <BasicMenu data={name}/>
        </div>
      </div>
    </div>
  );
}

export default Header;