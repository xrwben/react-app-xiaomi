import React, { Component } from "react";
import "./index.scss";

class Header extends Component {
  render () {
    return (
      <div className="header">
        <div className="top">
          <div className="logo">
            <img src={require("./logo.png")} alt="logo"/>
          </div>
          <div className="search">
            <div className="icon"></div>
            <div className="input">搜索商品名称</div>
          </div>
          <div className="login">
            <div className="btn"></div>
          </div>
        </div>
        <div className="nav">
          <ul>
            <li><span className="active">推荐</span></li>
            <li><span>手机</span></li>
            <li><span>智能</span></li>
            <li><span>电视</span></li>
            <li><span>笔记本</span></li>
            <li><span>家电</span></li>
            <li><span>生活家居</span></li>
          </ul>
          <div className="dropdown-btn">
            <i className="iconfont icon-xiala-"></i>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;