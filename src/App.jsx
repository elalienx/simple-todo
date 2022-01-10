// NPM packages
import { useState } from "react";

// Project files
import Modal from "./components/Modal";

export default function App() {
  // Local state
  const [todos, setTodos] = useState([]);
  const [modal, setModal] = useState(null);

  // Properties
  const remainingTodos = todos.filter((item) => item.isPending == false);

  // Methods
  // not pure
  function onNewTodo() {
    const currentTimeInMiliseconds = new Date().valueOf();
    const title = "Hello world";
    const newTodo = {
      id: currentTimeInMiliseconds,
      title: title,
      isPending: false,
      isFavorite: false,
      category: "",
    };

    setTodos([...todos, newTodo]);
  }

  // Components
  const Todos = todos.map((item) => <li key={item.id}>{item.title}</li>);

  return (
    <div className="App">
      <h1>Todo list</h1>
      <button onClick={onNewTodo}>Add</button>
      <p>Remaining tasks: {remainingTodos.length}</p>
      {todos.length === 0 && <p>There aren't any todos...</p>}
      {todos.length > 0 && Todos}
      <Modal state={[modal, setModal]} />
    </div>
  );
}
