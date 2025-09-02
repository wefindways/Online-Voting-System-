import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { UserPlus } from "lucide-react"; // icon for header

export default function Registration() {
  const [formData, setFormData] = useState({
    student_id: "",
    first_name: "",
    last_name: "",
    department: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost/online-voting-system/project/server/api/auth/register.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (result.success) {
        setIsSubmitting(true);
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        setIsSubmitting(false);
        setMessage("⚠️ " + result.message);
      }
    } catch (error) {
      setMessage("⚠️ Server error, please try again later.");
    }
  };

  return (
    <div className="flex justify-center p-3 sm:p-10 items-center overflow-hidden min-h-screen bg-gray-50">
      <div className="container m-auto grid grid-cols-1 lg:grid-cols-2 gap-25 overflow-hidden justify-center items-center">
        {/* Left Section - Welcome Message */}
        <div className="max-w-full space-y-6 px-2 sm:px-6">
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-snug tracking-tight"
          >
            Welcome to{" "}
            <span className="text-blue-600 drop-shadow-md">CampusBallot!</span>
          </h1>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            This platform is designed to make voting{" "}
            <span className="font-semibold text-gray-800">
              secure, fast, and remote{" "}
            </span>
            for all CCDI students. You can view candidates, cast your vote, and
            submit it online with just a few clicks.
          </p>

          <div className="p-3 sm:p-4 border-l-4 border-blue-600 bg-blue-50 rounded-md shadow-sm">
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              <span className="font-semibold text-blue-700">Important:</span>{" "}
              Provide your <span className="font-medium">real credentials</span>{" "}
              when registering. The system will verify your enrollment using the
              school’s official records to make sure that only legitimate
              students can access the voting system.
            </p>
          </div>
        </div>

        <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-xl max-w-full">
          {/* Header */}
          <div className="flex justify-start items-center gap-4 md:gap-8 mb-8">
            <div className="bg-blue-600 text-white rounded-full p-3">
              <UserPlus size={28} />
            </div>
            <div>
              <h1
                className="text-xl md:text-3xl font-bold text-gray-800"
              >
                Student Registration
              </h1>
              <p className="text-gray-500 text-md mt-1">
                Fill out the form below to create your account
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label
                htmlFor="student_id"
                className="block text-lg font-semibold text-gray-700"
              >
                Student ID
              </label>
              <input
                type="text"
                name="student_id"
                placeholder="e.g. 2025-005"
                value={formData.student_id}
                onChange={handleChange}
                className="w-full mt-2 py-3 px-4 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <p className="text-sm text-gray-500 mt-1">
                Enter the student ID assigned by the school
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex-1 min-w-[150px]">
                <label
                  htmlFor="first_name"
                  className="block text-lg font-semibold text-gray-700"
                >
                  First Name
                </label>
                <input
                  type="text"
                  name="first_name"
                  placeholder="Juan"
                  value={formData.first_name}
                  onChange={handleChange}
                  className="w-full mt-2 py-3 px-4 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>

              <div className="mb-5 flex-1 min-w-[150px]">
                <label
                  htmlFor="last_name"
                  className="block text-lg font-semibold text-gray-700"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  name="last_name"
                  placeholder="Dela Cruz"
                  value={formData.last_name}
                  onChange={handleChange}
                  className="w-full mt-2 py-3 px-4 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
            </div>

            <div className="mb-5">
              <label
                htmlFor="department"
                className="block text-lg font-semibold text-gray-700"
              >
                Department
              </label>
              <input
                type="text"
                name="department"
                placeholder="e.g. BSIT"
                value={formData.department}
                onChange={handleChange}
                className="w-full mt-2 py-3 px-4 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <p className="text-sm text-gray-500 mt-1">No year level needed</p>
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
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className="w-full mt-2 py-3 px-4 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />

              {/* Message */}
              {message && (
                <p className="mt-4 text-center border bg-red-50 border-red-300 py-3 rounded-lg text-base font-medium text-gray-600">
                  {message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full text-white py-3 rounded-lg text-lg font-semibold cursor-pointer ${
                isSubmitting
                  ? "bg-blue-300 text-white cursor-not-allowed border-none"
                  : "bg-blue-600 hover:bg-blue-700 transition duration-200"
              }`}
            >
              {isSubmitting ? "Registering" : "Register"}
            </button>
          </form>

          <p className="text-center my-4">
            <Link
              to="/login"
              className="text-blue-600 text-base hover:underline text-center"
            >
              Already have an account?
            </Link>
          </p>

          {/* Footer note */}
          <p className="mt-6 text-sm text-gray-500 text-center">
            Need help? Contact the IT office — it@school.edu.ph
          </p>
        </div>
      </div>
    </div>
  );
}
