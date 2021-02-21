import React from "react";
import {Navbar, NavbarBrand} from "reactstrap";
import Menu from "./components/MenuComponent"

function App() {
  return (
    <div >
      <Navbar dark color="primary">
        <div className="container">
        <NavbarBrand href="/">Risonante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu />
    </div>
  );
}

export default  App;
