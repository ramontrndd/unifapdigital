import ItemCard from './ItemCard.Js';

export default function ItemList({ items, onDelete, onEdit }) {
  return (
    <div>
      {items.map((item) => (
        <ItemCard
          key={item.id}
          item={item}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}
