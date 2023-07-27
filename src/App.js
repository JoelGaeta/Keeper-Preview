import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import EmployerCarousel from "./components/EmployerCarousel";
import EmployeeCarousel from "./components/EmployeeCarousel";

function App() {
  const currentPath = window.location.pathname;

  return (
    <Router>
      <Routes>
        {currentPath === "/employee" ? (
          <Route path="/employee" element={<EmployeeCarousel />} />
        ) : (
          <Route path="/employer" element={<EmployerCarousel />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;
