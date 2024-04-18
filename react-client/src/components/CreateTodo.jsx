import { useContext, useState } from "react";
import TodoContext from "../context/TodoContext";

const CreateTodo = () => {
  const { addTodo } = useContext(TodoContext);
  const [todoText, setTodoText] = useState("");

  const onTodoSubmit = async () => {
    addTodo(todoText);

    setTodoText("");
  };

  return (
    <>
      <h3>CreateTodo</h3>

      <input
        type="text"
        value={todoText}
        onChange={(e) => {
          setTodoText(e.target.value);
        }}
      />
      
      <button type="button" onClick={() => onTodoSubmit()}>
        Add
      </button>
    </>
  );
};

export default CreateTodo;
