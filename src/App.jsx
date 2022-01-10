// NPM packages
import { useState } from "react";

// Project files
import Modal from "components/modal/Modal";
import ModalForm from "components/modal-form/ModalForm";
import TodoItem from "components/todo-item/TodoItem";
import DummyData from "./dummyData.json";

export default function App() {
  // Local state
  const [todos, setTodos] = useState(DummyData);
  const [modal, setModal] = useState(null);

  // Properties
  const remainingTodos = todos.filter((item) => item.isCompleted == false);

  // Components
  const Todos = todos.map((item) => (
    <TodoItem
      item={item}
      key={item.id}
      onDelete={onDelete}
      onUpdate={onUpdate}
    />
  ));
  const Form = <ModalForm setModal={setModal} state={[todos, setTodos]} />;

  // Methods
  function onDelete(id) {
    const clonedList = [...todos];
    const index = clonedList.findIndex((item) => item.id === id);

    clonedList.splice(index, 1);
    setTodos(clonedList);
  }

  function onUpdate(id, newKeyValue) {
    const clonedList = [...todos];
    const index = clonedList.findIndex((item) => item.id === id);
    const item = clonedList[index];
    const editedItem = { ...item, ...newKeyValue };

    clonedList[index] = editedItem;
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
