import "./NavBar.css";

import { AppRoutes } from "../../constants/routes";
import { NavContent } from "../../constants/navContent";

import NavItem from "../NavItem/NavItem";

export default function NavBar() {
  return (
    <nav className="nav-bar">
      <h1 className="nav-bar__logo">{NavContent.LOGO}</h1>
      <ul className="nav-bar__items">
        <NavItem label={NavContent.HOME_LABEL} to={AppRoutes.HOME} />
        <NavItem label={NavContent.ABOUT_LABEL} to={AppRoutes.ABOUT} />
      </ul>
    </nav>
  );
}
