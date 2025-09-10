import { useState, useEffect } from "react";
import NewButton from "../../../components/admin/NewButton";
import CandidatesTable from "./CandidatesTable";
import Modal from "../../../components/admin/Modal";
import Breadcrumb from "../../../components/admin/Breadcrumb";

export default function CandidatesPage({ positions = [] }) {
  const [candidates, setCandidates] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    position: "",
    photo: null,
    platform: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    useEffect(() => {
      fetch(
        "http://localhost/online-voting-system/project/server/api/auth/admin/candidates.php"
      )
        .then((res) => res.json())
        .then(setCandidates)
        .catch(console.error);
    }, []);
  };

  return (
    <section className="grid grid-rows-[auto_auto] gap-5">
      <header className="flex justify-between items-center">
        <h1 className="text-[1.37rem] md:text-3xl font-bold">Candidates</h1>
        <Breadcrumb />
      </header>
      <section className="bg-white p-4 rounded border-t-4 border-gray-300 shadow-md">
        <NewButton onAdd={() => setShowModal(true)} />
        <CandidatesTable candidates={candidates} />
        {showModal && (
          <Modal
            title="Add New Candidate"
            onClose={() => setShowModal(false)}
            onSave={handleChange}
          >
            <form form onSubmit={handleSubmit} className="space-y-4">
              <label className="block font-medium">
                Firstname
                <input
                  type="text"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                  required
                />
              </label>
              <label className="block font-medium">
                Lastname
                <input
                  type="text"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                  required
                />
              </label>
              <label className="block font-medium">
                Position
                <select
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                  required
                >
                  <option value="">- Select -</option>
                  {positions.map((pos) => (
                    <option key={pos.id} value={pos.id}>
                      {pos.name}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block font-medium">
                Photo
                <input
                  type="file"
                  name="photo"
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                  accept="image/*"
                  required
                />
              </label>
              <label className="block font-medium">
                Platform
                <textarea
                  name="platform"
                  value={formData.platform}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                  rows={3}
                />
              </label>
              <div className="flex justify-end space-x-2 mt-5">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 cursor-pointer"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 cursor-pointer"
                >
                  Save
                </button>
              </div>
            </form>
          </Modal>
        )}
      </section>
    </section>
  );
}
