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

function Sidebar({ isOpen }) {
  return (
    <div>
      {/* Reports section */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } px-6 py-4 border-b border-b-gray-100`}
      >
        <p className="text-gray-500 text-sm font-semibold tracking-wide uppercase">
          Reports
        </p>
      </div>

      {/* Navigation */}
      <div
        className={`${
          isOpen
            ? "flex flex-col px-4 py-2 space-y-2"
            : "flex flex-col px-4 pb-2 pt-5 space-y-2"
        }`}
      >
        <NavLink
          to="/admin/home"
          end
          className={({ isActive }) =>
            `sidebar-nav ${isActive ? "bg-blue-100" : ""}`
          }
        >
          <PieChart />
          <span className={`${isOpen ? "block" : "hidden"} ml-3`}>
            Dashboard
          </span>
        </NavLink>
        <NavLink
          to="/admin/home/votes"
          className={({ isActive }) =>
            `sidebar-nav ${isActive ? "bg-blue-100" : ""}`
          }
        >
          <Vote />
          <span className={`${isOpen ? "block" : "hidden"} ml-3`}>Votes</span>
        </NavLink>
      </div>

      {/* Manage section */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } px-6 py-4 border-b border-b-gray-100`}
      >
        <p className="text-gray-500 text-sm font-semibold tracking-wide uppercase">
          Manage
        </p>
      </div>

      {/* Navigation */}
      <div
        className={`${
          isOpen
            ? "flex flex-col px-4 py-2 space-y-2"
            : "flex flex-col px-4 pb-2 space-y-2"
        }`}
      >
        <NavLink
          to="/admin/home/voters"
          className={({ isActive }) =>
            `sidebar-nav ${isActive ? "bg-blue-100" : ""}`
          }
        >
          <UserCheck />
          <span className={`${isOpen ? "block" : "hidden"} ml-3`}>Voters</span>
        </NavLink>
        <NavLink
          to="/admin/home/positions"
          className={({ isActive }) =>
            `sidebar-nav ${isActive ? "bg-blue-100" : ""}`
          }
        >
          <Medal />
          <span className={`${isOpen ? "block" : "hidden"} ml-3`}>
            Positions
          </span>
        </NavLink>
        <NavLink
          to="/admin/home/candidates"
          className={({ isActive }) =>
            `sidebar-nav ${isActive ? "bg-blue-100" : ""}`
          }
        >
          <Users />
          <span className={`${isOpen ? "block" : "hidden"} ml-3`}>
            Candidates
          </span>
        </NavLink>
      </div>

      {/* Settings section*/}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } px-6 py-4 border-b border-b-gray-100`}
      >
        <p className="text-gray-500 text-sm font-semibold tracking-wide uppercase">
          Settings
        </p>
      </div>

      {/* Navigation */}
      <div
        className={`${
          isOpen
            ? "flex flex-col px-4 py-2 space-y-2"
            : "flex flex-col px-4 space-y-2"
        }`}
      >
        <NavLink
          to="/admin/home/ballot-position"
          className={({ isActive }) =>
            `sidebar-nav ${isActive ? "bg-blue-100" : ""}`
          }
        >
          <FileStack />
          <span className={`${isOpen ? "block" : "hidden"} ml-3`}>
            Ballot Position
          </span>
        </NavLink>
        <NavLink
          to="/admin/home/election-title"
          className={({ isActive }) =>
            `sidebar-nav ${isActive ? "bg-blue-100" : ""}`
          }
        >
          <Briefcase />
          <span className={`${isOpen ? "block" : "hidden"} ml-3`}>
            Election Title
          </span>
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
