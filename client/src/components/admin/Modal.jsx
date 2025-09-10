import { X } from "lucide-react";

export default function Modal({ title, children, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30">
      <div className="bg-white rounded-lg shadow-lg p-6 w-[400px]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 cursor-pointer"
          >
            <X size={20}/>
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
