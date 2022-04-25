import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AppRoutes } from "./constants/routes";

import Home from "./pages/Home";
import About from "./pages/About";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path={AppRoutes.HOME} element={<Home />} />
        <Route path={AppRoutes.ABOUT} element={<About />} />
        <Route path="*" element={<Navigate to={AppRoutes.HOME} replace />} />
      </Routes>
    </Router>
  );
}
