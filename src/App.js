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
         <Nav img="https://www.tailorbrands.com/wp-content/uploads/2020/06/mcdonalds-logo-a-1.png"/>
         <Slider />
         <Card />
         <Collapse email="anissafia90@gmail.com"/>
         <Footer />
       </div>


    )
       
  }

}

export default App;