import {
  PieChart,
  Vote,
  UserCheck,
  Medal,
  Users,
  FileStack,
  Briefcase,
} from "lucide-react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div>
      {/* Reports section */}
      <div className="px-6 py-4 border-b border-b-gray-100">
        <p className="text-gray-500 text-sm font-semibold tracking-wide uppercase">
          Reports
        </p>
      </div>

      {/* Navigation */}
      <div className="flex flex-col px-4 py-2 space-y-2">
        <NavLink
          to="/admin/admin-dashboard"
          end
          className={({ isActive }) =>
            `sidebar-nav ${isActive ? "bg-blue-100" : ""}`
          }
        >
          <PieChart />
          <span className="ml-3">Dashboard</span>
        </NavLink>
        <NavLink
          to="/admin/admin-dashboard/votes"
          className={({ isActive }) =>
            `sidebar-nav ${isActive ? "bg-blue-100" : ""}`
          }
        >
          <Vote />
          <span className="ml-3">Votes</span>
        </NavLink>
      </div>

      {/* Manage section */}
      <div className="px-6 py-4 border-b border-b-gray-100">
        <p className="text-gray-500 text-sm font-semibold tracking-wide uppercase">
          Manage
        </p>
      </div>

      {/* Navigation */}
      <div className="flex flex-col px-4 py-2 space-y-2">
        <NavLink
          to="/admin/admin-dashboard/voters"
          className={({ isActive }) =>
            `sidebar-nav ${isActive ? "bg-blue-100" : ""}`
          }
        >
          <UserCheck />
          <span className="ml-3">Voters</span>
        </NavLink>
        <NavLink
          to="/admin/admin-dashboard/positions"
          className={({ isActive }) =>
            `sidebar-nav ${isActive ? "bg-blue-100" : ""}`
          }
        >
          <Medal />
          <span className="ml-3">Positions</span>
        </NavLink>
        <NavLink
          to="/admin/admin-dashboard/candidates"
          className={({ isActive }) =>
            `sidebar-nav ${isActive ? "bg-blue-100" : ""}`
          }
        >
          <Users />
          <span className="ml-3">Candidates</span>
        </NavLink>
      </div>

      {/* Settings section*/}
      <div className="px-6 py-4 border-b border-b-gray-100">
        <p className="text-gray-500 text-sm font-semibold tracking-wide uppercase">
          Settings
        </p>
      </div>

      {/* Navigation */}
      <div className="flex flex-col px-4 py-2 space-y-2">
        <NavLink
          to="/admin/admin-dashboard/ballot-position"
          className={({ isActive }) =>
            `sidebar-nav ${isActive ? "bg-blue-100" : ""}`
          }
        >
          <FileStack />
          <span className="ml-3">Ballot Position</span>
        </NavLink>
        <NavLink
          to="/admin/admin-dashboard/election-title"
          className={({ isActive }) =>
            `sidebar-nav ${isActive ? "bg-blue-100" : ""}`
          }
        >
          <Briefcase />
          <span className="ml-3">Election Title</span>
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
