import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">
        <h1>Home</h1>
      </Link>
      <Link to="/properties">
        <h1>Properties</h1>
      </Link>
    </nav>
  );
}

export default Navbar;
