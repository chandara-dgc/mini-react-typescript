import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import ProtectedRoute from "./components/ProtectRoute/ProtectRoute";
import Team from "./pages/nested/Team";
import History from "./pages/nested/History";

const App: React.FC = () => {
  const isAuthenticated = true; // or logic for determining auth status

  return (
    <Router>
      {/* <nav>
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/profile/123"> Profile </Link>
      </nav> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="team" element={<Team />} />
          <Route path="history" element={<History />} />
        </Route>
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/profile/:id" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
