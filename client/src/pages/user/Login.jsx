import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Lock } from "lucide-react";
import axios from "axios";

function Login() {
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLogginIn, setIsLoggingIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost/online-voting-system/project/server/api/auth/login.php",
        {
          student_id: studentId,
          password: password,
        }
      );

      if (response.data.success) {
        setIsLoggingIn(true);
        setTimeout(() => {
          navigate("/dashboard");
        }, 2000);
      } else {
        setIsLoggingIn(false);
        setMessage(response.data.message);
      }
    } catch (error) {
      console.error("Login error:", error);
      setMessage("⚠️ Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-3">
      <div className="bg-white p-6 md:p-10 rounded-2xl shadow-xl overflow-hidden w-full max-w-md">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="bg-blue-600 text-white rounded-full p-3">
            <Lock size={24} />
          </div>
          <div>
            <h1 className="text-xl md:text-3xl font-bold text-gray-800">
              Student Login
            </h1>
            <p className="text-gray-500 text-sm mt-1">
              Enter your credentials to access your account
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin}>
          <div className="mb-5">
            <label
              htmlFor="student_id"
              className="block text-lg font-semibold text-gray-700"
            >
              Student ID
            </label>
            <input
              type="text"
              id="student_id"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              className="w-full mt-2 py-3 px-4 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="e.g. 2025-005"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-lg font-semibold text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-2 py-3 px-4 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Error Message */}
          {message && (
            <p className="my-4 text-center border bg-red-50 border-red-300 py-3 rounded-lg text-base font-medium text-gray-600">
              {message}
            </p>
          )}

          {/* Buttons */}
          <button
            type="submit"
            disabled={isLogginIn}
            className={`w-full py-3 rounded-lg text-lg font-semibold cursor-pointer active:bg-blue-500 transition duration-200 ${
              isLogginIn
                ? "bg-blue-300 text-white cursor-not-allowed border-none"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            {isLogginIn ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Footer */}
        <p className="text-center my-4">
          <Link
            to="/"
            className="text-blue-600 text-base hover:underline text-center"
          >
            Don’t have an account? Register here
          </Link>
        </p>

        <p className="mt-6 text-sm text-gray-500 text-center">
          Need help? Contact the IT office — it@school.edu.ph
        </p>
      </div>
    </div>
  );
}

export default Login;
