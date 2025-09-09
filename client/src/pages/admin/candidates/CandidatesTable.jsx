import CandidatesRow from './CandidatesRow';

export default function CandidatesTable({ candidates }) {
  return (
    <table className="min-w-full bg-white border">
      <thead>
        <tr className="bg-gray-100 text-left">
          <th className="px-4 py-2 border">Position</th>
          <th className="px-4 py-2 border">Photo</th>
          <th className="px-4 py-2 border">Firstname</th>
          <th className="px-4 py-2 border">Lastname</th>
          <th className="px-4 py-2 border">Platform</th>
          <th className="px-4 py-2 border">Tools</th>
        </tr>
      </thead>
      <tbody>
        {candidates.map(candidate => (
          <CandidatesRow key={candidate.id} candidate={candidate} />
        ))}
      </tbody>
    </table>
  );
}
