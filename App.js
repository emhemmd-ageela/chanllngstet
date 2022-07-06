import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

import React from "react";
import Counter from "./component/Counter";
class App extends React.Component {
  state = {
    show: false,
  };
  handleshow = () => {
    this.setState({
      ...this.state,
      show: !this.state.show,
    });
  };

  render() {
    return (
      <div className="App">
        {this.state.show === true ? <Counter /> : null}
        <Button variant="primary" onClick={this.handleshow}>
          {this.state.show === true ? "Hide" : "show"}
        </Button>{" "}
      </div>
    );
  }
}

export default App;
