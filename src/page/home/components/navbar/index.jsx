import React, { Component } from "react";
import "./index.scss";

class Navbar extends Component {
  constructor (props) {
    super(props);
    this.state = {
      currentNav: "首页",
      navList: [
        {title: "首页", path: "/home"},
        {title: "分类", path: "/home"},
        {title: "购物车", path: "/home"},
        {title: "我的", path: "/home"},
      ]
    }
  }
  render () {
    return (
      <div className="footer">
        <ul>
          {
            this.state.navList.map(item => {
              return (
                <li key={item.title} className={this.state.currentNav===item?"active":null}>
                  <div className="icon"></div>
                  <p>{ item.title }</p>
                </li>
              )
            })
          }
          {/* <li className="active">
            <div className="icon"></div>
            <p>首页</p>
          </li>
          <li>
            <div className="icon"></div>
            <p>分类</p>
          </li>
          <li>
            <div className="icon"></div>
            <p>购物车</p>
          </li>
          <li>
            <div className="icon"></div>
            <p>我的</p>
          </li> */}
        </ul>
      </div>
    )
  }
}

export default Navbar;