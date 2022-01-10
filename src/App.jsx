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
      id: 1001,
      title: "Do laundry",
      isCompleted: false,
      isFavorite: false,
      category: "",
    },
    {
      id: 1002,
      title: "Buy food",
      isCompleted: true,
      isFavorite: false,
      category: "",
    },
    {
      id: 1003,
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
    <TodoItem item={item} key={item.id} onEdit={onEdit} onDelete={onDelete} />
  ));
  const Form = <ModalForm setModal={setModal} state={[todos, setTodos]} />;

  // Methods
  function onEdit(id, newKeyValue) {
    const clonedList = [...todos];
    const index = clonedList.findIndex((item) => item.id === id);
    const item = clonedList[index];
    const editedItem = { ...item, ...newKeyValue };

    clonedList[index] = editedItem;
    setTodos(clonedList);
  }

  function onDelete(id) {
    const clonedList = [...todos];
    const index = clonedList.findIndex((item) => item.id === id);

    clonedList.splice(index, 1);
    setTodos(clonedList);
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
