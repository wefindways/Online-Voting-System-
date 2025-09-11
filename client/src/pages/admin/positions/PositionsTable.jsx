import PositionsRow from "./PositionsRow";

export default function PositionsTable({ positions }) {
  return (
    <table className="min-w-full border-collapse border border-gray-300 mt-4">
      <thead className="bg-gray-100">
        <tr>
          <th className="px-4 py-2 border">Description</th>
          <th className="px-4 py-2 border">Max Vote</th>
          <th className="px-4 py-2 border">Actions</th>
        </tr>
      </thead>
      <tbody>
        {positions.length > 0
          ? positions.map((pos) => (
              <PositionsRow key={pos.id} descriptions={pos} />
            ))
          : null}
      </tbody>
    </table>
  );
}
