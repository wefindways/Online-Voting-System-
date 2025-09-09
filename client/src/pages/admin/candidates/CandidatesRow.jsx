export default function CandidatesRow({ candidate }) {
  return (
    <tr className="border-b">
      <td className="px-4 py-2">{candidate.position_name}</td>
      <td className="px-4 py-2">
        <img
          src={candidate.photo}
          alt={candidate.firstname}
          className="w-10 h-10 rounded-full object-cover"
        />
      </td>
      <td className="px-4 py-2">{candidate.firstname}</td>
      <td className="px-4 py-2">{candidate.lastname}</td>
      <td className="px-4 py-2">
        <button className="bg-sky-500 text-white px-2 py-1 rounded hover:bg-sky-600">
          View
        </button>
      </td>
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
