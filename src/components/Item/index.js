export default function Item({ item }) {
  console.log(item);
  return (
    <li>
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>{item.packed ? `✅` : `❌`}</button>
    </li>
  );
}
