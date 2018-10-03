import * as APIUtil from '../util/todo_api_util';
import {receiveErrors, clearErrors} from './error_actions';

export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

export const receiveTodos = todos => ({
  type: RECEIVE_TODOS,
  todos
});

export const receiveTodo = todo => ({
  type: RECEIVE_TODO,
  todo
});

export const removeTodo = todo => ({
  type: REMOVE_TODO,
  todo
});

export const todoError = error => ({
  type: TODO_ERROR,
  error
});

export const fetchTodos = () => {
  return dispatch => {
    APIUtil.fetchTodos().then(
      res => dispatch(receiveTodos(res)
    ));
  };
};

export const createTodo = (todo) => {
  return dispatch => {
    return APIUtil.createTodo(todo).then(
      res => dispatch(receiveTodo(res)),
      err => dispatch(receiveErrors(err.responseJSON))
    );
  };
};
