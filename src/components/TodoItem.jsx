export default function TodoItem({ item }) {
  const { title, isPending } = item;

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
        checked={isPending}
        onChange={() => alert("pending...")}
      />
      {finalTitle}
      <button>X</button>
    </li>
  );
}
