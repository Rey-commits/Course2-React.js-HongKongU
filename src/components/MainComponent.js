/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
// import logo from './logo.svg';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Header from "./HeaderComponent";
import Footer from "./FooterComponent"
import Home from "./HomeComponent"
import { DISHES } from '../shared/dishes'
import { Switch, Route, Redirect } from "react-router-dom";

class Main extends Component{

  constructor(props){
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  } 
 
  render(){
    const HomePage = () => {
      return(
        <Home/>
      )
    }
    return(
      <div>
       <Header/>
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} /> } />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );

  }

}

export default Main;
