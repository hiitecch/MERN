import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">SocialApp</h2>

      <div className="nav-buttons">
        <Link to="/">
          <button>🏠 Home</button>
        </Link>

        <Link to="/create-post">
          <button>➕ Create Post</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;