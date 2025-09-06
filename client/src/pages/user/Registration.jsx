import { useRegistration } from "../../hooks/useRegistration";
import { UserPlus } from "lucide-react"; // icon for header
import { Link } from "react-router-dom" 
import Footer from "../../components/shared/Footer";
import SubmitButton from "../../components/shared/SubmitButton";
import MessageBox from "../../components/shared/MessageBox";
import FormInput from "../../components/shared/FormInput";

export default function Registration() {
  const {
    formData,
    handleChange,
    handleSubmit,
    message,
    loading,
  } = useRegistration();

  return (
    <div className="flex justify-center p-3 sm:p-10 items-center overflow-hidden min-h-screen bg-gray-50">
      <div className="container m-auto grid grid-cols-1 lg:grid-cols-2 gap-25 overflow-hidden justify-center items-center">
        {/* Left Section - Welcome Message */}
        <div className="max-w-full space-y-6 px-2 sm:px-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-snug tracking-tight">
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
              <h1 className="text-xl md:text-3xl font-bold text-gray-800">
                Student Registration
              </h1>
              <p className="text-gray-500 text-md mt-1">
                Fill out the form below to create your account
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <FormInput
              label="Student ID"
              type="type"
              name="student_id"
              placeholder="e.g 2025-005"
              value={formData.student_id}
              onChange={handleChange}
              required
              extraInfo="Enter the student ID assigned by the school"
            />
            <div className="flex flex-wrap gap-4">
              <div className="flex-1 min-w-[150px]">
                <FormInput
                  label="First Name"
                  type="text"
                  name="first_name"
                  placeholder="Juan"
                  value={formData.first_name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex-1 min-w-[150px]">
                <FormInput
                  label="Last Name"
                  type="text"
                  name="last_name"
                  placeholder="Dela Cruz"
                  value={formData.last_name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <FormInput
              label="Department"
              name="department"
              type="text"
              placeholder="e.g. BSIT"
              value={formData.department}
              onChange={handleChange}
              required
              extraInfo="No year level needed"
            />
            <FormInput
              label="Password"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            {/* Message */}
            {message && <MessageBox message={message} />}

            <SubmitButton loading={loading}>Register</SubmitButton>
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
          <footer>
            <Footer variant="note" />
          </footer>
        </div>
      </div>
    </div>
  );
}
