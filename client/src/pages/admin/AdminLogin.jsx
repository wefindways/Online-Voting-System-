import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock } from "lucide-react";
import axios from "axios";

function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost/online-voting-system/project/server/api/auth/admin_login.php",
        { username, password }
      );

      if (res.data.success) {
        localStorage.setItem("isAdmin", true);
        localStorage.setItem("admin_id", res.data.admin_id);
        setLoading(true);
        setTimeout(() => {
          navigate("/admin/home");
        }, 2000);
      } else {
        setLoading(false);
        setMessage("⚠️ " + res.data.message);
      }
    } catch (error) {
      setMessage("⚠️ Server error, please try again later.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-3">
      <div className="bg-white p-6 md:p-10 rounded-2xl shadow-xl overflow-hidden w-full max-w-md">
        <div className="flex items-center gap-4 mb-8">
          <div className="bg-blue-600 text-white rounded-full p-3">
            <Lock size={24} />
          </div>
          <div>
            <h1 className="text-xl md:text-3xl font-bold text-gray-800">
              Admin Login
            </h1>
            <p className="text-gray-500 text-sm mt-1">
              Login to start your session
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin}>
          <div className="mb-5">
            <label
              htmlFor="admin_username"
              className="block text-lg font-semibold text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              id="admin_username"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full mt-2 py-3 px-4 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="mb-5">
            {" "}
            <label
              htmlFor="password"
              className="block text-lg font-semibold text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-2 py-3 px-4 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Error Message */}
          {message && (
            <p className="my-4 text-center border bg-red-50 border-red-300 py-3 rounded-lg text-base font-medium text-gray-600">
              {message}
            </p>
          )}

          {/* Button */}

          <button
            type="submit"
            disabled={loading}
            className={`w-full border border-gray-300 py-3 rounded-lg text-lg font-medium cursor-pointer ${
              loading
                ? "bg-blue-300 text-white cursor-not-allowed border-none"
                : "bg-blue-600 hover:bg-blue-700 text-white transition duration-200"
            }`}
          >
            {loading ? "Logging in" : "Login"}
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-sm text-gray-500 text-center">
          Need help? Contact the IT office — it@school.edu.ph
        </p>
      </div>
    </div>
  );
}

export default AdminLogin;
