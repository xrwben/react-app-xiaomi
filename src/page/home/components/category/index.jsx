import React, { Component } from "react";
import "./index.scss";

class Category extends Component {
  render () {
    return (
      <div className="category">
        <ul>
          <li>
            <img src={require("./nav1.png")} alt="nav" />
          </li>
          <li>
            <img src={require("./nav2.webp")} alt="nav" />
          </li>
          <li>
            <img src={require("./nav3.gif")} alt="nav" />
          </li>
          <li>
            <img src={require("./nav4.webp")} alt="nav" />
          </li>
          <li>
            <img src={require("./nav5.webp")} alt="nav" />
          </li>
        </ul>
        <ul>
          <li>
            <img src={require("./nav6.png")} alt="nav" />
          </li>
          <li>
            <img src={require("./nav7.jpg")} alt="nav" />
          </li>
          <li>
            <img src={require("./nav8.png")} alt="nav" />
          </li>
          <li>
            <img src={require("./nav9.png")} alt="nav" />
          </li>
          <li>
            <img src={require("./nav10.png")} alt="nav" />
          </li>
        </ul>
      </div>
    )
  }
}

export default Category;