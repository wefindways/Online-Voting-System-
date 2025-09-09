// import Breadcrumb from "../../../components/admin/Breadcrumb";

// export default function CandidatesPage() {
//   return (
//     <div className="flex justify-between items-center">
//       <h1 className="text-[1.37rem] md:text-3xl  font-bold">Candidates</h1>
//       <Breadcrumb />
//     </div>
//   );
// }
import { useState, useEffect } from "react";
import NewButton from "../../../components/admin/NewButton";
import CandidatesTable from "./CandidatesTable";
import CandidateModal from "./CandidatesModal";
import Breadcrumb from "../../../components/admin/Breadcrumb";

export default function CandidatesPage() {
  const [candidates, setCandidates] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch(
      "http://localhost/online-voting-system/project/server/api/auth/candidates.php"
    )
      .then((res) => res.json())
      .then(setCandidates)
      .catch(console.error);
  }, []);

  return (
    <section className="grid grid-rows-[auto_auto]">
      <header className="flex justify-between items-center">
        <h1 className="text-[1.37rem] md:text-3xl font-bold">Election Title</h1>
        <Breadcrumb />
      </header>
      <section className="mt-10">
        <NewButton onAdd={() => setShowModal(true)} />
        <CandidatesTable candidates={candidates} />
        {showModal && <CandidateModal onClose={() => setShowModal(false)} />}
      </section>
    </section>
  );
}
