import React, { Component } from 'react';
import Header from "./components/header/index.jsx";
import Banner from "./components/banner/index.jsx";
import Category from "./components/category/index.jsx";
import Goods from "./components/goods/index.jsx";
import Navbar from "./components/navbar/index.jsx";

class Home extends Component {
  render () {
    return (
      <div className="home">
        <Header></Header>
        <Banner></Banner>
        <Category></Category>
        <Goods></Goods>
        <Navbar></Navbar>
      </div>
    );
  }
}

export default Home;
