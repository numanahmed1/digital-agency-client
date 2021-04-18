import React, { useContext } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { userInfoContext } from "../../../App";
import "./Header.css";

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userInfoContext);

  return (
    <header className="header">
      <div className="container">
        <Navbar expand="lg" className="p-0">
          <Link className="logo" to="/">
            Digital <span>Agency</span>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto main-nav">
              <Link to="/">Home</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/">Services</Link>
              <Link to="/">Testimonial</Link>
              <Link to="/contact">Contact</Link>
              {loggedInUser.email ? (
                <Link to="/dashboard">Dashboard</Link>
              ) : (
                <Link to="/login">Login</Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
  );
};

export default Header;
