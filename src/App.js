/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
        <NavbarBrand href="/">Risonante Con Fusion</NavbarBrand>
        </div>
      </Navbar>

    </div>
  );
}

export default App;
