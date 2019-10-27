import React, { Component } from "react";
import "./index.scss"; 
import Swiper from 'swiper/js/swiper.js';
import 'swiper/css/swiper.min.css';

class Banner extends Component {
  componentDidMount () {
    new Swiper('.swiper-container', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      }
    });
  }

  render () {
    return (
      <div className="banner">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img src={require("./banner1.jpg")} alt=""/>
            </div>
            <div className="swiper-slide">
              <img src={require("./banner2.jpg")} alt=""/>
            </div>
            <div className="swiper-slide">
              <img src={require("./banner3.jpg")} alt=""/>
            </div>
          </div>
          <div className="swiper-pagination"></div>
          {/* <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
          <div className="swiper-scrollbar"></div> */}
        </div>
      </div>
    )
  }
}

export default Banner;