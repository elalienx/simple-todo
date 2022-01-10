export default function TodoItem({ item, onEdit, onDelete }) {
  const { id, title, isCompleted } = item;

  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={() => onEdit(id, { isCompleted: !isCompleted })}
      />
      <input
        type="text"
        value={title}
        onChange={(event) => onEdit(id, { title: event.target.value })}
      />
      <button onClick={() => onDelete(id)}>X</button>
    </li>
  );
}
