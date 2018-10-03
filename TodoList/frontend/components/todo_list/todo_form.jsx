import { uniqueId } from '../../util/id_generator';
import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      done: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const todo = Object.assign({}, this.state, { id: uniqueId() });
    // this.props.receiveTodo(todo);
    this.props.createTodo(todo).then(
      () => {
        this.setState({title: "", body: ""});
        this.props.clearErrors();
      }
    ); // reset form
  }

  render() {

    return (
      <form className="todo-form" onSubmit={this.handleSubmit}>
        <ul>
          {this.props.errors.map( (err) => {
            return <li>{err}</li>;
          })}
        </ul>
        <label>Title:
          <input
            className="input"
            ref="title"
            value={this.state.title}
            placeholder="buy milk"
            onChange={this.update('title')}/>
        </label>
        <label>Body:
          <textarea
            className="input"
            ref="body"
            cols='20'
            value={this.state.body}
            rows='5'
            placeholder="2% or whatever is on sale!"
            onChange={this.update('body')}>
          </textarea>
        </label>
        <button className="create-button">Create Todo!</button>
      </form>
    );
  }
};

export default TodoForm;
