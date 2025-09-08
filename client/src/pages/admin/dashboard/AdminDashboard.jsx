import { AlignLeft, Edit, Users, User } from "lucide-react";
import Breadcrumb from "../../../components/admin/Breadcrumb";
import StatCard from "../../../components/admin/StatCard";

function AdminDashboard() {
  return (
    <div>
      <header className="flex justify-between items-center">
        <h1 className="text-[1.37rem] md:text-3xl font-bold">Dashboard</h1>
        <Breadcrumb />
      </header>
      <section
        aria-label="Dashboard cards"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10 gap-8 text-gray-900"
      >
        <StatCard
          value="3"
          label="Voters Voted"
          icon={Edit}
        />
        <StatCard
          value="10"
          label="No. of Positions"
          icon={AlignLeft}
        />
        <StatCard
          value="25"
          label="No. of Candidates"
          icon={Users}
        />
        <StatCard
          value="100"
          label="Total Voters"
          icon={User}
        />
      </section>
    </div>
  );
}

export default AdminDashboard;
