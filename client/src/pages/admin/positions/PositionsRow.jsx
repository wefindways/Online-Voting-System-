export default function PositionsRow({ descriptions }) {
  return (
    <tr className="border-b">
      <td className="px-4 py-2">{descriptions.description}</td>
      <td className="px-4 py-2">{descriptions.max_vote}</td>
      <td className="px-4 py-2 space-x-2">
        <button className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600">
          Edit
        </button>
        <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">
          Delete
        </button>
      </td>
    </tr>
  );
}
