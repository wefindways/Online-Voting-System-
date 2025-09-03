import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration from "./pages/user/Registration";
import Login from "./pages/user/Login";
import AdminDashboard from "./pages/admin/AdminDashboard";
import StudentDashboard from "./pages/user/StudentDashboard";
import AdminPage from "./pages/admin/AdminPage";
import AdminLogin from "./pages/admin/AdminLogin";
import Votes from "./pages/admin/Votes";
import Voters from "./pages/admin/Voters";
import Positions from "./pages/admin/Positions";
import Candidates from "./pages/admin/Candidates";
import BallotPosition from "./pages/admin/BallotPosition";
import ElectionTitle from "./pages/admin/ElectionTitle";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route */}
        <Route path="/" element={<Registration />} />

        {/* student routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<StudentDashboard />} />

        {/* admin routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/home" element={<AdminPage />}>
          {/* Routes for REPORTS */}
          <Route index element={<AdminDashboard />} />
          <Route path="votes" element={<Votes />} />

          {/* Routes for MANAGE */}
          <Route path="voters" element={<Voters />} />
          <Route path="positions" element={<Positions />} />
          <Route path="candidates" element={<Candidates />} />

          {/* Routes for SETTINGS */}
          <Route path="ballot-position" element={<BallotPosition />} />
          <Route path="election-title" element={<ElectionTitle />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
