import React, { Component } from "react";
import Header from "./HeaderComponent";
import Menu from "./MenuComponent";
import { DISHES } from "../shared/dishes";
import Footer from "./FooterComponent";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null,
    };
  }

  onDishSelect(dishId) {
    console.log(dishId + " was selected!");
    this.setState({ selectedDish: dishId });
  }

  render() {
    return (
      <div>
      <Header />
        <Menu
          dishes={this.state.dishes}
          onClick={(dishId) => this.onDishSelect(dishId)}
          selectedDish={this.state.selectedDish}
        />
    <Footer />
      </div>
    );
  }
}

export default Main;
