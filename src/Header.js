import React from "react";
import { Tab, Tabs } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import './Header.css'
const Header = () => {
  const { pathname } = useLocation();

  const formattedTitle =
    pathname.substring(1).charAt(0).toUpperCase() +
    pathname.substring(1).slice(1);
  return (
    <div className="header">
      <h1 >{formattedTitle}</h1>

      <Tabs value={pathname} centered>
        <Tab label="Notes" value="/notes" to="/notes" component={Link} />
        <Tab label="Fetch" value="/fetch" to="/fetch" component={Link} />
        <Tab label="Map" value="/map" to="/map" component={Link} />

      </Tabs>
    </div>
  );
};
export default Header;
