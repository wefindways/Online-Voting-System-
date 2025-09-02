import { ArrowRightCircle } from "lucide-react";

function StatCard({value, label, icon: Icon, gradient}) {
  return (
    <div className={`bg-gradient-to-r ${gradient} rounded-2xl shadow-lg hover:shadow-xl transition p-6 flex flex-col justify-between overflow-hidden`}>
      <div className="flex items-start justify-between">
        <div>
          <span className="text-5xl font-extrabold">{value}</span>
          <p className="text-lg font-medium mt-2">{label}</p>
        </div>
        <Icon size={80} strokeWidth={3} color="white" className="opacity-80" />
      </div>
      <div className="flex items-center justify-center gap-2 mt-6 py-2 rounded-lg bg-white/20 text-sm font-semibold text-white cursor-pointer hover:bg-white/30 transition">
        <span>More info</span>
        <ArrowRightCircle size={18} />
      </div>
    </div>
  );
}

export default StatCard;
