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
      title: "Do laundry",
      isCompleted: false,
      isFavorite: false,
      category: "",
    },
    {
      id: 1,
      title: "Buy food",
      isCompleted: true,
      isFavorite: false,
      category: "",
    },
    {
      id: 2,
      title: "Study for exame",
      isCompleted: false,
      isFavorite: false,
      category: "",
    },
  ]);
  const [modal, setModal] = useState(null);

  // Properties
  const remainingTodos = todos.filter((item) => item.isCompleted == false);

  // Components
  const Todos = todos.map((item) => (
    <TodoItem item={item} key={item.id} onClick={onEditItem} />
  ));
  const Form = <ModalForm setModal={setModal} state={[todos, setTodos]} />;

  // Methods
  function onEditItem(id, newKeyValue) {
    const index = todos.findIndex((item) => item.id === id);
    const item = todos.find((item) => item.id === id);
    const editedItem = { ...item, ...newKeyValue };
    const clonedTodoList = [...todos];

    clonedTodoList[index] = editedItem;
    setTodos(clonedTodoList);
  }

  return (
    <div className="App">
      <h1>Todo list</h1>
      <button onClick={() => setModal(Form)}>Add</button>
      <p>Remaining tasks: {remainingTodos.length}</p>
      {todos.length > 0 ? Todos : <p>There aren't any todos...</p>}
      <Modal state={[modal, setModal]} />
    </div>
  );
}
