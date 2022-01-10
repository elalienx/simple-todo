// NPM packages
import { useState } from "react";

// Project files
import Modal from "./components/Modal";
import ModalForm from "./components/ModalForm";
import TodoItem from "./components/TodoItem";

export default function App() {
  // Local state
  const [todos, setTodos] = useState([
    {
      id: 0,
      isPending: false,
      isFavorite: false,
      category: "",
    },
  ]);
  const [modal, setModal] = useState(null);

  // Properties
  const remainingTodos = todos.filter((item) => item.isPending == false);

  // Components
  const Todos = todos.map((item) => <TodoItem item={item} key={item.id} />);
  const Form = <ModalForm setModal={setModal} state={[todos, setTodos]} />;

  return (
    <div className="App">
      <h1>Todo list</h1>
      <button onClick={() => setModal(Form)}>Add</button>
      <p>Remaining tasks: {remainingTodos.length}</p>
      {todos.length === 0 && <p>There aren't any todos...</p>}
      {todos.length > 0 && Todos}
      <Modal state={[modal, setModal]} />
    </div>
  );
}
