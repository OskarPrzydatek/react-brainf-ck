import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppRoutes } from "./constants/routes";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path={AppRoutes.HOME} element={<Home />} />
        <Route path={AppRoutes.ABOUT} element={<About />} />
      </Routes>
    </Router>
  );
}
