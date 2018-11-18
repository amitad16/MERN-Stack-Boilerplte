import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "../css/NavBar.css";

// Action
import { logoutUser } from "../../actions/authAction";

const NavBar = props => {
  let options;

  console.log("auth:::::", props);

  const handleLogout = () => {
    props.logoutUser();
    window.location.href = "/login";
  };

  if (props.auth.isAuthenticated) {
    options = (
      <React.Fragment>
        <Link className="item" to="/sitedetails">
          Site Details
        </Link>
        <Link className="item" to="/dashboard">
          Dashboard
        </Link>
        <Link className="item" to="/logout" onClick={handleLogout}>
          Logout
        </Link>
      </React.Fragment>
    );
  } else {
    options = (
      <React.Fragment>
        <Link className="item" to="/">
          Home
        </Link>
        <Link className="item" to="/register">
          Register
        </Link>
        <Link className="item" to="/login">
          Login
        </Link>
      </React.Fragment>
    );
  }

  return (
    <div className="ui inverted segment navbar">
      <div className="ui inverted secondary pointing menu">{options}</div>
      {/* <div className="ui inverted secondary pointing menu">
        <Link className="item" to="/">
          Home
        </Link>
        <Link className="item" to="/register">
          Register
        </Link>
        <Link className="item" to="/login">
          Login
        </Link>
        <Link className="item" to="/sitedetails">
          Site Details
        </Link>
        <Link className="item" to="/dashboard">
          Dashboard
        </Link>
        <Link className="item" to="/logout">
          Logout
        </Link>
      </div> */}
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(NavBar);
