import React from 'react';
// Components
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {
  componentDidMount () {
    this.props.fetchTodos();
  }

  render() {
    const { todos, receiveTodo, createTodo, errors, clearErrors } = this.props;
    const todoItems = todos.map(todo => (
        <TodoListItem
          key={`todo-list-item${todo.id}`}
          todo={todo}
          receiveTodo={ receiveTodo } />
      )
    );

    return(
      <div>
        <ul className="todo-list">
          { todoItems }
        </ul>
        <TodoForm createTodo={ createTodo } errors={errors} clearErrors={clearErrors}/>
      </div>
    );
  }
}

export default TodoList;
