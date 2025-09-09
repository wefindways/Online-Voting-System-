// src/admin/components/CandidateModal.jsx
import { useState } from "react";

export default function CandidateModal({ onClose, onSave, positions = [] }) {
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
    onSave(formData); // pass data up to parent
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Add New Candidate</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Firstname</label>
            <input
              type="text"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Lastname</label>
            <input
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Position</label>
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
          </div>
          <div>
            <label className="block text-sm font-medium">Photo</label>
            <input
              type="file"
              name="photo"
              onChange={handleChange}
              className="w-full border p-2 rounded"
              accept="image/*"
                required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Platform</label>
            <textarea
              name="platform"
              value={formData.platform}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              rows={3}
              required
            />
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded hover:bg-gray-100"
            >
              Close
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
