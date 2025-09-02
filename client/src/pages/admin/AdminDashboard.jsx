import { AlignLeft, Edit, Users, User } from "lucide-react";
import Breadcrumb from "../../components/Breadcrumb";
import StatCard from "../../components/StatCard";

function AdminDashboard() {
  return (
    <div>
      <header className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <Breadcrumb /> 
      </header>
      <section className="grid grid-cols-4 mt-10 gap-8 text-gray-900">
        <StatCard
          value="3"
          label="Voters Voter"
          icon={Edit}
          gradient="from-red-400 to-red-600"
        />
        <StatCard
          value="10"
          label="No. of Positions"
          icon={AlignLeft}
          gradient="from-blue-400 to-blue-600"
        />
        <StatCard
          value="25"
          label="No. of Candidates"
          icon={Users}
          gradient="from-green-400 to-green-600"
        />
        <StatCard
          value="100"
          label="Total Voters"
          icon={User}
          gradient="from-yellow-400 to-yellow-500"
        />
      </section>
    </div>
  );
}

export default AdminDashboard;
