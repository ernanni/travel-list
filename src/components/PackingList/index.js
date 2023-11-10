import Item from '../Item';

export default function PackingList({ items, onDeleteItem }) {
  return (
    <div className="list">
      <ul>
        {items &&
          items.map((item) => (
            <Item onDeleteItem={onDeleteItem} key={item.id} item={item} />
          ))}
      </ul>
    </div>
  );
}
