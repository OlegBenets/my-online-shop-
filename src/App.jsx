import React, { Component } from "react";
import Navbar from "./components/navbar";
import Product from "./components/product";
import ShoppingCart from "./components/shopping-cart";

class App extends Component {
  state = {
    items: [],
  };

  addItem = (amount, name, price) => {
    let currentItems = this.state.items;
    let existingItem = this.state.items.find((item) => item.name === name);
    
    if (existingItem) {
      existingItem.amount++;
    } else {
      currentItems.push({
        amount,
        name,
        price,
      });
    }

    this.setState({ items: currentItems });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="main-container">
          <div className="product-container">
            <Product
              onAdd={() => this.addItem(1, "Beer", 2.99)}
              title="Beer"
              description="Füge Bier in dein Warenkorb hinzu"
              image="beer.jpg"/>
            <Product
              onAdd={() => this.addItem(1, "Chicken", 3.99)}
              title="Chicken"
              description="Füge Hühnchen in dein Warenkorb hinzu"
              image="chicken.jpg"/>
            <Product
              onAdd={() => this.addItem(1, "Churro", 4.99)}
              title="Churro"
              description="Füge Churro in dein Warenkorb hinzu"
              image="churro.jpg"/>
            <Product
              onAdd={() => this.addItem(1, "Empanadas", 5.99)}
              title="Empanadas"
              description="Füge Empanadas in dein Warenkorb hinzu"
              image="empanadas.jpg"/>
          </div>
          <ShoppingCart items={this.state.items} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
