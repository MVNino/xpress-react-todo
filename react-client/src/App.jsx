import "./App.css";
import CreateTodo from "./components/CreateTodo";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <Header />
      <TodoList />
      <CreateTodo />
    </>
  );
}

export default App;
