import React, { Component } from "react";
import "./index.scss";

class GoodsList extends Component {
  render () {
    return (
      <div className="product-list">
        <div className="big-pic">
          <img src={require("./big_pic.jpg")} alt=""/>
        </div>
        <div className="goods-wrapper">
          {
            [1, 2, 3].map((item, index) => {
              return (
                <ul key={index}>
                  <li>
                    <div className="goods">
                      <img src={require("./goods1.webp")} alt=""/>
                      <div className="info">
                        <div className="name">小米MIX 2S</div>
                        <div className="brief">四曲面陶瓷机身，骁龙845</div>
                        <div className="price">￥1799<span className="price old"><s>￥2999</s></span></div>
                        <div className="buy-btn"> 立即购买</div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="goods">
                      <img src={require("./goods1.webp")} alt=""/>
                      <div className="info">
                        <div className="name ellipsis">小米MIX 2S</div>
                        <div className="brief">四曲面陶瓷机身，骁龙845</div>
                        <div className="price">￥1799<span className="price old"><s>￥2999</s></span></div>
                        <div className="buy-btn"> 立即购买</div>
                      </div>
                    </div>
                  </li>
                </ul>
              )
            })
          }
          <ul>
            <li>
              <div className="goods">
                <img src={require("./goods1.webp")} alt=""/>
                <div className="info">
                  <div className="name">小米MIX 2S</div>
                  <div className="brief">四曲面陶瓷机身，骁龙845</div>
                  <div className="price">￥1799<span className="price old"><s>￥2999</s></span></div>
                  <div className="buy-btn"> 立即购买</div>
                </div>
              </div>
            </li>
            <li>
              <div className="goods">
                <img src={require("./goods1.webp")} alt=""/>
                <div className="info">
                  <div className="name ellipsis">小米MIX 2S</div>
                  <div className="brief">四曲面陶瓷机身，骁龙845</div>
                  <div className="price">￥1799<span className="price old"><s>￥2999</s></span></div>
                  <div className="buy-btn"> 立即购买</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default GoodsList;