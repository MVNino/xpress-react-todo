import "./App.css";
import CreateTodo from "./components/CreateTodo";
import Header from "./components/Header";
import HideCompletedTodos from "./components/HideCompletedTodos";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <Header />
      <HideCompletedTodos />
      <TodoList />
      <CreateTodo />
    </>
  );
}

export default App;
