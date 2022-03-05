import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <div className="nav-bar">

    <ul className="nav-list">
      <li>
        <NavLink to="/">
          Hospitals
        </NavLink>
      </li>
      <li>
        <NavLink to="/entry/item">
          Edit-Hospital
        </NavLink>
      </li>
      <li>
        <NavLink to="cities">
          Cities
        </NavLink>
      </li>
      <li>
        <NavLink to="/cityentry/item">
          Edit-Cities
        </NavLink>
      </li>
    </ul>
  </div>
);
export default Navbar;
