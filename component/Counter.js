import "../App.css";
import "./Counter.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
class Counter extends React.Component {
  state = {
    counter2: 0,
  };
  count = () => {
    this.setState({
      counter2: this.state.counter2 + 1,
    });
  };
  count1 = () => {
    this.setState({
      counter2: this.state.counter2 - 1,
    });
  };
  reset = () => {
    this.setState({
      counter2: 0,
    });
  };

  render() {
    return (
      <>
        <div className="button">
          <Button variant="primary" onClick={this.count}>
            +
          </Button>
          <h3> count :{this.state.counter2}</h3>
          <Button
            variant="primary"
            onClick={this.state.counter2 > 0 ? this.count1 : null}
          >
            -
          </Button>{" "}
        </div>
        <Button variant="primary" onClick={this.reset}>
          reset
        </Button>{" "}
      </>
    );
  }
}
export default Counter;
