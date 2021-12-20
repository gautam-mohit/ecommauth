import React from "react";
import Reactdom from "react-dom";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar className="header" >
        <Navbar.Brand href="#home">E-comm</Navbar.Brand>
        <Nav className="mr-auto navbar_wrapper">
          <Link to="/add">Add Product</Link>
          <Link to="/update">Update product</Link>
          <Link to="/login">Login Product</Link>
          <Link to="/register">Register Product</Link>
        </Nav>
      </Navbar>
      {/* <h1>class</h1> */}
    </div>
  );
};

export default Header;
