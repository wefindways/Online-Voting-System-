import { useAdminLogin } from "../../hooks/useAdminLogin";
import FormInput from "../../components/shared/FormInput";
import MessageBox from "../../components/shared/MessageBox";
import SubmitButton from "../../components/shared/SubmitButton";
import { Lock } from "lucide-react";

export default function AdminLogin() {
  const {
    username,
    password,
    setUsername,
    setPassword,
    message,
    loading,
    handleLogin,
  } = useAdminLogin();

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
          <FormInput
            label="Username"
            type="text"
            id="admin_username"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <FormInput
            label="Password"
            type="password"
            id="admin_username"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {/* Error Message */}
          {message && <MessageBox message={message} />}

          {/* Button */}
          <SubmitButton loading={loading}>Login</SubmitButton>
        </form>

        {/* Footer */}
        <p className="mt-6 text-sm text-gray-500 text-center">
          Need help? Contact the IT office — it@school.edu.ph
        </p>
      </div>
    </div>
  );
}
