import "./NavBar.css";

import { AppRoutes } from "../../routes";

import NavItem from "../NavItem/NavItem";

export default function NavBar() {
  return (
    <nav className="nav-bar">
      <ul className="nav-bar__items">
        <NavItem label="Kompilator" to={AppRoutes.HOME} />
        <NavItem label="Brainf*ck? A co to?" to={AppRoutes.ABOUT} />
      </ul>
    </nav>
  );
}
