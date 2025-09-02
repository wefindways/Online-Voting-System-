import { Menu, Vote } from "lucide-react"; // Vote = ballot-like icon

function Header({ onLogout }) {
  return (
    <div className="poppins text-white flex justify-between items-center bg-gradient-to-r from-blue-600 to-blue-500 shadow-md px-8 md:px-16 py-4 z-20">
      {/* Logo + Title */}
      <div className="flex items-center gap-2">
        <Vote className="w-7 h-7" />
        <h3 className="text-2xl font-bold tracking-wide">CampusBallot</h3>
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-4">
        <button
          onClick={onLogout}
          className="hidden md:inline-block bg-white text-blue-600 font-semibold px-4 py-2 rounded-xl shadow hover:bg-blue-50 transition cursor-pointer"
        >
          Logout
        </button>
        <button className="md:hidden p-2 rounded-lg hover:bg-blue-400 transition" aria-label="Open Menu">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

export default Header;
