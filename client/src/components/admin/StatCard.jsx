import { ArrowRightCircle } from "lucide-react";

export default function StatCard({ value, label, icon: Icon }) {
  return (
    <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl p-8 flex flex-col justify-between overflow-hidden cursor-pointer transition-all duration-300">
      <div className="flex items-start justify-between">
        <div>
          <span className="text-5xl font-extrabold text-neutral-900">{value}</span>
          <p className="text-lg font-medium text-neutral-500 mt-2">{label}</p>
        </div>

        <Icon
          size={80}
          strokeWidth={2.5}
          className="text-blue-400 opacity-80"
        />
      </div>
      {/* soft blue action button */}
      <div className="flex items-center justify-center gap-2 mt-6 py-2 rounded-lg text-sm font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 active:bg-blue-50 transition-all duration-300">
        <span>More info</span>
        <ArrowRightCircle size={18} className="text-blue-600" />
      </div>
    </div>
  );
}
