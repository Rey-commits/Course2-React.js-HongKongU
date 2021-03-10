/* eslint-disable no-unused-vars */
import React, { Component } from "react"
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem,  Jumbotron } from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
    render() {
        return(
            <>
             <Navbar dark expand="md">
                 <div className="container">
                     <NavbarBrand href="/"> Ristorante Con Fusion </NavbarBrand>
                 </div>
             </Navbar>
             <Jumbotron>
                 <div className="container">
                     <div className="row row-header">
                         <div className="col-12 col-sm-6">
                            <h1>Ristorante con Fusion</h1>
                            <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                         </div>
                     </div>
                 </div>
             </Jumbotron>
            </>
        )
    }
}

export default Header;