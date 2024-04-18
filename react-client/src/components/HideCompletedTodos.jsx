import { useContext } from "react";
import TodoContext from "../context/TodoContext";

const HideCompletedTodos = () => {
  const { hideCompletedTodos } = useContext(TodoContext);

  return (
    <ul>
      <li>
        <input
          type="checkbox"
          className="checkbox-todo"
          id="hide-completed-todos-checkbox"
          defaultChecked={false}
          onClick={() => hideCompletedTodos()}
        />

        <label htmlFor="hide-completed-todos-checkbox">
          Hide Completed Todos
        </label>
      </li>
    </ul>
  );
};

export default HideCompletedTodos;
