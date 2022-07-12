import "../styles/App.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/" className="nav--link-el">
        <h3>Logo</h3>
      </Link>
      <ul className="nav--links">
        <Link to="/search" className="nav--link-el">
          <li>Search</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
