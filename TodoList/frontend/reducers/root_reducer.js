import { combineReducers } from 'redux';

import todosReducer from './todos_reducer';
import stepsReducer from './steps_reducer';
import errorReducer from './error_reducer';

const rootReducer = combineReducers({
  todos: todosReducer,
  errors: errorReducer,
  steps: stepsReducer
});

export default rootReducer;
