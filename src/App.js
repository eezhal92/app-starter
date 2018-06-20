// @flow
import axios from 'axios';
import React, { Component } from 'react';

type TextProps = {
  message: string,
};

const Text = (props: TextProps) => <div>{props.message}</div>;

type AppState = {
  message: string,
};

class App extends Component<$FlowFixMe, AppState> {
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
        <Text />
        <p>Message: {this.state.message}</p>
      </div>
    );
  }
}

export default App;
