import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const apiUrl = "http://localhost:3000";
  const [todos, setTodos] = useState([]);
  const [hideDoneTasks, setHideDoneTasks] = useState(false);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const response = await fetch(`${apiUrl}/api/todos`);

    const { data } = await response.json();

    setTodos(data.map((item) => item));
  };

  const addTodo = async (title) => {
    const response = await fetch(`${apiUrl}/api/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: title }),
    });

    const { data } = await response.json();

    setTodos([...todos, data]);
  };

  const deleteTodo = async (id) => {
    const response = await fetch(`${apiUrl}/api/todos/${id}`, {
      method: "DELETE",
    });

    if (response.status === 200)
      setTodos(todos.filter((todo) => todo.id !== id));
  };

  const completeTodo = async (id) => {
    // Todo record to update
    const foundTodo = todos.find((todo) => todo.id === id);

    const response = await fetch(`${apiUrl}/api/todos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isCompleted: !foundTodo.isCompleted,
      }),
    });

    const { data } = await response.json();

    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              isCompleted: data.isCompleted,
            }
          : todo
      )
    );
  };

  const hideCompletedTodos = () => {
    setHideDoneTasks(!hideDoneTasks);
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        hideDoneTasks,
        addTodo,
        deleteTodo,
        completeTodo,
        hideCompletedTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

TodoProvider.propTypes = {
  children: PropTypes.any,
};

export default TodoContext;
