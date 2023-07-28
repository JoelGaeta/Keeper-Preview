import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import EmployerCarousel from "./components/EmployerCarousel";
import EmployeeCarousel from "./components/EmployeeCarousel";

function App() {
  const currentPath = window.location.pathname;

  return (
    <Router>
      <Routes>
        {currentPath === "/keeper-preview/employee" ? (
          <Route
            path="/keeper-preview/employee"
            element={<EmployeeCarousel />}
          />
        ) : (
          <Route
            path="/keeper-preview/employer"
            element={<EmployerCarousel />}
          />
        )}
      </Routes>
    </Router>
  );
}

export default App;
