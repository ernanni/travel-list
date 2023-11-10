import Item from '../Item';

export default function PackingList({ items, onDeleteItem, onToggleItem }) {
  return (
    <div className="list">
      <ul>
        {items &&
          items.map((item) => (
            <Item
              onDeleteItem={onDeleteItem}
              onToggleItem={onToggleItem}
              key={item.id}
              item={item}
            />
          ))}
      </ul>
    </div>
  );
}
