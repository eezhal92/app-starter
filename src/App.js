// @flow
import axios from 'axios';
import React, { Component } from 'react';

type TextProps = {
  message: string,
};

const Text = (props: TextProps) => <div>{props.message}</div>;

type AppState = {
  message: string,
  posts: Array,
};

class App extends Component<$FlowFixMe, AppState> {
  state = {
    message: '',
    posts: [],
  };

  componentDidMount() {
    this.getMessage();
    this.getPosts();
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

  getPosts() {
    axios
      .get('http://localhost:4000/posts')
      .then(response => response.data)
      .then((data) => {
        this.setState({
          posts: data.posts,
        });
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <Text message="Hmm" />
        <p>Message: {this.state.message}</p>
        {this.state.posts.map(item => <div key={item.id}>{item.title}</div>)}
      </div>
    );
  }
}

export default App;
