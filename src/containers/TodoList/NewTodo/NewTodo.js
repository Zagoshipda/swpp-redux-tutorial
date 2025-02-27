import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actionCreators from '../../../store/action/index';

import './NewTodo.css';

class NewTodo extends Component {
  state = {
    title: '',
    content: '',
    submitted: false,
  }

  postTodoHandler = () => {
    // const data = { title: this.state.title, content: this.state.content };
    // alert('Submitted\n' + data.title + '\n' + data.content);
    this.props.onStoreTodo(this.state.title, this.state.content);
    this.setState({ submitted: true });
  }

  render() {
    return (
      <div className="NewTodo">
        <h1>Add a Todo</h1>
        <label>Title</label>
        <input type="text" value={this.state.title}
          onChange={(event) => this.setState({ title: event.target.value })} />
        <label>Content</label>
        <textarea rows="4" type="text" value={this.state.content}
          onChange={(event) => this.setState({ content: event.target.value })} />
        <button onClick={() => this.postTodoHandler()}>Submit</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onStoreTodo: (title, content) => {
    dispatch(actionCreators.postTodo({ title: title, content: content }));
    }
  }
};

export default connect(null, mapDispatchToProps)(NewTodo);  // connect() returns a function
