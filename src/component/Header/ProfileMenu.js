import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import "./styles.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function BasicMenu(data) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [token, setToken] = useState('');
  const open = Boolean(anchorEl);
  let navigate = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <div
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className="profile-menu-flex"
      >
        <AccountCircleRoundedIcon />
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{
          ".MuiPaper-root": {
            minWidth:'20vw',
            borderRadius: "1rem",
            marginTop:"3px",
            // position:'absolute',
            // top:'1',
            boxShadow: "0 1px 2px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 5%)",
          },
        }}
      >
        <MenuItem className="profile-div">
            <div>
                <img src={data.data.photoUrl} alt="IMG" className="ProfilePic"/>
            </div>
            <div style={{marginTop:'10px'}}>
                {data.data.name}
            <br/>
                {data.data.email}
            </div>
        </MenuItem>
        <hr/>
        
        <MenuItem onClick={()=>{
          setAnchorEl(null);
          localStorage.removeItem('token');
          setToken('');
          navigate("/");
        }} 
        className="menu-items">
          Sign Out
        </MenuItem>
      </Menu>
    </div>
  );
}

