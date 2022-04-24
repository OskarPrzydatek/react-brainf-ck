import "./NavItem.css";

import { Link } from "react-router-dom";

type NavItemProps = {
  label: string;
  to: string;
};

export default function NavItem({ label, to }: NavItemProps) {
  return (
    <li className="nav-item">
      <Link to={to}>{label}</Link>
    </li>
  );
}
