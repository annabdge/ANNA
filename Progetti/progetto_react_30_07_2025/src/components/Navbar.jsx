import { NavLink } from "react-router";

function Navbar(props) {
  return (
    <nav>
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/view" end>
        - View
      </NavLink>
      <NavLink to="/insert" end>
        - Insert
      </NavLink>
    </nav>
  );
}

export { Navbar };
