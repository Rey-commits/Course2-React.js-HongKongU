/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./components/MenuComponent";
import './App.css';

function App() {
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
        <NavbarBrand href="/">Risonante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu/>

    </div>
  );
}

export default App;
