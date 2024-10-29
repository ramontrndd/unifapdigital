export default function ItemCard({ item, onDelete, onEdit }) {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <div className="flex justify-between items-center ">
        <div>
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <p className="text-gray-600">{item.description}</p>
        </div>
        <div className="space-x-2">
          <button
            className="px-3 bg-blue-500 rounded"
            onClick={() => onEdit(item)}
          ></button>
        </div>
        <div className="space-x-2">
          <button
            className="px-3 bg-red-500 rounded"
            onClick={() => onDelete(item)}
          ></button>
        </div>
      </div>
    </div>
  );
}
