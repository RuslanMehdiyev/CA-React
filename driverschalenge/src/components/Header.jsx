import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <NavLink to={"/"}>Drivers</NavLink>
      <NavLink to={"/favorites"}>Favorites</NavLink>
    </header>
  );
}

export default Header;
