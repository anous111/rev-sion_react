import React, { Component } from "react";
import "./App.css"
import Nav  from "./Nav";
import Slider from "./Slider";
import Card from "./Card";
import Collapse from "./Collapse";
import Footer from "./Footer";

class App extends Component{
  render(){
    return(
       <div>
         <Nav />
         <Slider />
         <Card />
         <Collapse />
         <Footer />
       </div>


    )
       
  }

}

export default App;