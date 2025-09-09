export default function NewButton({ onAdd }) {
  return (
    <button
      onClick={onAdd}
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
    >
      + New 
    </button>
  );
}
