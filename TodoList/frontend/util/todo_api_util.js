const fetchTodos = () => {
  return $.ajax({
    url: "api/todos",
    method: "GET"
  });
};

const createTodo = (todo) => {
  return $.ajax({
    method: "POST",
    url: "api/todos",
    data: {todo}
  });
};

export { fetchTodos, createTodo };
