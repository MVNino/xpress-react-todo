import 'dotenv/config'
import express from "express";
import cors from "cors";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors());

const todos = [
  {
    id: 1,
    isCompleted: true,
    title: "Jogging",
  },
  {
    id: 2,
    isCompleted: false,
    title: "Watching Movies",
  },
  {
    id: 3,
    isCompleted: false,
    title: "Coding",
  },
  {
    id: 4,
    isCompleted: false,
    title: "Studying",
  },
  {
    id: 5,
    isCompleted: false,
    title: "Take a nap",
  },
];

// Generate unique id
const generateUniqueId = () => Math.floor(Math.random() * 1000000);

app.get("/api/todos", (request, response) => {
  response.json({ data: todos });
});

app.post("/api/todos", (request, response) => {
  const { title } = request.body;
  const id = generateUniqueId();

  const newTodo = { id, title, isCompleted: false };

  todos.push(newTodo);

  response.status(201).json({ data: newTodo });
});

app.patch("/api/todos/:id", (request, response) => {
  const { id } = request.params;
  const { isCompleted } = request.body;

  const todoIndex = todos.findIndex((todo) => todo.id === Number(id));

  todos[todoIndex] = {
    ...todos[todoIndex],
    isCompleted,
  };

  response.json({ data: todos[todoIndex], message: "Updated" });
});

app.delete("/api/todos/:id", (request, response) => {
  const { id } = request.params;

  const todoIndex = todos.findIndex((todo) => todo.id === Number(id));

  todos.splice(todoIndex, 1);

  response.json({ message: "Deleted" });
});

app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));
