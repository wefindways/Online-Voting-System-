import { useState } from "react";
import axios from "axios";
import Modal from "../../../components/admin/Modal";
import Breadcrumb from "../../../components/admin/Breadcrumb";
import NewButton from "../../../components/admin/NewButton";
import PositionsTable from "./PositionsTable";

export default function Positions() {
  const [showModal, setShowModal] = useState(false);
  const [description, setDescription] = useState("");
  const [maxVote, setMaxVote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost/online-voting-system/project/server/api/auth/admin/positions.php", {
        description,
        max_vote: maxVote,
      })
      .then(() => {
        setShowModal(false);
        setDescription("");
        setMaxVote("");
        // refresh table here
      });
  };

  return (
    <div className="grid grid-rows-[auto_auto] gap-5">
      <header className="flex justify-between items-center">
        <h1 className="text-[1.37rem] md:text-3xl font-bold">Positions</h1>
        <Breadcrumb />
      </header>
      <div className="bg-white p-4 rounded border-t-4 border-gray-300 shadow-md">
        <NewButton onAdd={() => setShowModal(true)} />
        <PositionsTable />
        {showModal && (
          <Modal
            title="Add New Position"
            onClose={() => setShowModal(false)}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <label className="block font-medium">
                Position
                <input
                  className="border w-full p-2 rounded"
                  type="text"
                  name="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </label>
              <label className="block font-medium">
                Maximum Vote
                <input
                  className="border w-full p-2 rounded"
                  type="number"
                  name="maxVote"
                  value={maxVote}
                  onChange={(e) => setMaxVote(e.target.value)}
                  required
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
      </div>
    </div>
  );
}
