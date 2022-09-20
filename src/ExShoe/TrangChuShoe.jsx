import React, { Component } from "react";
import dataShoe from "./data.json";
import ListItem from "./ListItem";
import Modal from "./Modal";

export default class TrangChuShoe extends Component {
  state = {
    stateShoe: {
      id: 1,
      name: "Adidas Prophere",
      alias: "adidas-prophere",
      price: 350,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 995,
      image: "http://svcy3.myclass.vn/images/adidas-prophere.png",
    },
  };
  changeItems = (newShoe) => {
    this.setState({
      stateShoe: newShoe,
    });
  };
  render() {
    let { stateShoe } = this.state;
    return (
      <div>
        <ListItem dataShoeProps={dataShoe} changeItemProps={this.changeItems} />
        <Modal stateShoeProps={stateShoe} />
      </div>
    );
  }
}
