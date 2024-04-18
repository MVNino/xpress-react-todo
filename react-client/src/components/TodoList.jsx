import { useContext } from "react";
import TodoContext from "../context/TodoContext";

const TodoList = () => {
  const { todos, deleteTodo, completeTodo, hideDoneTasks } =
    useContext(TodoContext);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} hidden={hideDoneTasks && todo.isCompleted}>
          <input
            type="checkbox"
            className="checkbox-todo"
            id={`todo-${todo.id}`}
            defaultChecked={todo.isCompleted}
            onClick={() => completeTodo(todo.id)}
          />

          <label
            style={{
              textDecoration: todo.isCompleted ? "line-through" : "none",
            }}
            htmlFor={`todo-${todo.id}`}
          >
            {todo.title}
          </label>

          <button className="remove-button" onClick={() => deleteTodo(todo.id)}>
            X
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
