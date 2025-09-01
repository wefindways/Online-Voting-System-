import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import Header from "../../components/Header.jsx";
import Sidebar from "../../components/Sidebar.jsx";

function AdminPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");
    if (!isAdmin) {
      navigate("/admin/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("admin_id");
    navigate("/admin/login");
  };

  return (
    <div className="admin-dashboard min-h-screen grid grid-rows-[auto_1fr] grid-cols-[0_1fr] md:grid-cols-[280px_1fr] overflow-hidden">
      {/* Header - spans full width */}
      <header className="row-start-1 col-span-2">
        <Header onLogout={handleLogout} />
      </header>

      {/* Sidebar - fixed on the left */}
      <aside className="row-start-2 col-start-1 bg-white ">
        <Sidebar />
      </aside>

      {/* Main content area */}
      <main className="row-start-2 col-start-2 bg-gray-50 p-6 overflow-y-auto">
        <Outlet /> {/* Nested pages show here */}
      </main>
    </div>
  );
}

export default AdminPage;
