export default function TodoItem({ item, onClick }) {
  const { title, isCompleted } = item;

  // Properties
  let finalTitle = String(title);

  // Safeguards
  if (title === null) finalTitle = "null task";
  if (title === undefined) finalTitle = "undefined task";
  if (title === "") finalTitle = "empty task";

  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={() => onClick(id, { isCompleted: !isCompleted })}
      />
      {finalTitle}
      <button>X</button>
    </li>
  );
}
