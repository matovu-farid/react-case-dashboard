import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <div className="nav-bar">

    <ul className="nav-list">
      <li>
        <NavLink to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/entry/item">
          Add
        </NavLink>
      </li>
    </ul>
  </div>
);
export default Navbar;
