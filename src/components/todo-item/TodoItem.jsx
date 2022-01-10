export default function TodoItem({ item, onUpdate, onDelete }) {
  const { id, title, isCompleted } = item;

  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={() => onUpdate(id, { isCompleted: !isCompleted })}
      />
      <input
        type="text"
        value={title}
        onChange={(event) => onUpdate(id, { title: event.target.value })}
      />
      <button onClick={() => onDelete(id)}>X</button>
    </li>
  );
}
