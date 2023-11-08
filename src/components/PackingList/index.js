import Item from '../Item';

export default function PackingList({ initialItems }) {
  console.log(initialItems);
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}
