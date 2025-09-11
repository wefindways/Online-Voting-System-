import { useLogin } from "../../hooks/user/useLogin";
import { Link } from "react-router-dom";
import { Lock } from "lucide-react";
import FormInput from "../../components/shared/FormInput";
import MessageBox from "../../components/shared/MessageBox";
import SubmitButton from "../../components/shared/SubmitButton";
import Footer from "../../components/shared/Footer";

export default function Login() {
  const {
    studentId,
    password,
    setStudentId,
    setPassword,
    message,
    loading,
    handleLogin,
  } = useLogin();

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
          <FormInput
            label="Student ID"
            type="text"
            id="studentId"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            placeholder="Enter your student id"
            required
          />
          <FormInput
            label="Password"
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {/* Error Message */}
          {message && <MessageBox message={message} />}

          {/* Buttons */}
          <SubmitButton loading={loading}>Login</SubmitButton>
        </form>

        <p className="text-center my-4">
          <Link
            to="/"
            className="text-blue-600 text-base hover:underline text-center"
          >
            Don’t have an account? Register here
          </Link>
        </p>

        {/* Footer */}
        <footer>
          <Footer variant="help" />
        </footer>
      </div>
    </div>
  );
}
