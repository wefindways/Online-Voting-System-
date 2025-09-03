import { Menu } from "lucide-react"; 
function Header({ onLogout }) {
  return (
    <div className="poppins text-white flex gap-3 md:justify-between items-center bg-gradient-to-r from-blue-600 to-blue-500 shadow-md px-6 md:px-16 py-4 z-20">
      {/* Menu icon */}
      <div className="flex gap-5">
        <button
          className="p-1 rounded-xl hover:bg-blue-400 transition ease-in-out duration-300 cursor-pointer"
          aria-label="Open Menu"
        >
          <Menu className="w-7 h-7" />
        </button>
        {/* Logo + Title */}
        <div className="flex items-center gap-2">
          <h3 className="text-2xl font-bold tracking-wide">CampusBallot</h3>
        </div>
      </div>
      {/* Buttons */}
      <div className="flex items-center gap-4">
        <button
          onClick={onLogout}
          className="hidden md:inline-block bg-white text-blue-600 font-semibold px-4 py-2 rounded-xl shadow hover:bg-blue-50 transition cursor-pointer"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Header;
