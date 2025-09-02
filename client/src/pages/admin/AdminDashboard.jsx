import Breadcrumb from "../../components/Breadcrumb";

function AdminDashboard() {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <Breadcrumb />
    </div>
  );
}

export default AdminDashboard;
