import axios from 'axios';
import React, { Component } from 'react';

class App extends Component {
  state = {
    message: '',
  };

  componentDidMount() {
    this.getMessage();
  }

  getMessage() {
    axios
      .get('http://localhost:4000/')
      .then(response => response.data)
      .then((data) => {
        this.setState({
          message: data.message,
        });
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <p>Message: {this.state.message}</p>
      </div>
    );
  }
}

export default App;
