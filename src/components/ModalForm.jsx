// NPM packages
import { useState } from "react";

export default function ModalForm({ setModal, state }) {
  const [todos, setTodos] = state;

  // Local state
  const [title, setTitle] = useState("");

  function onSubmit() {
    alert("preparing to add item");
  }

  function onSubmit(event) {
    const currentTimeInMiliseconds = new Date().valueOf();
    const newTodo = {
      id: currentTimeInMiliseconds,
      title: title,
      isCompleted: false,
      isFavorite: false,
      category: "",
    };

    event.preventDefault();
    setTodos([...todos, newTodo]);
    setModal(null);
  }

  return (
    <form role="dialog" onSubmit={(event) => onSubmit(event)}>
      <h2>Add task</h2>
      <input
        autoFocus
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Do laundry"
        required
        type="text"
        value={title}
      />
      <button type="submit">Add tasks</button>
      <button onClick={() => setModal(null)}>Cancel</button>
    </form>
  );
}
