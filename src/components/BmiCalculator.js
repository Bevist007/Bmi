import React, { Component } from "react";
import Form from "./Form";
import Navbar from "./Navbar";

class BmiCalculator extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var style = {
      marginTop: "20px",
    };
    return (
      <div>
        <Navbar />
        <div className="container" style={style}>
          <h2>{this.props.title}</h2>
          <Form />
        </div>
      </div>
    );
  }
}

export default BmiCalculator;
