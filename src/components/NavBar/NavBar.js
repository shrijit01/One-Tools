
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        {/* <a className="navbar-brand" href="/">Utility App</a> */}
        <Link className="navbar-brand" to="/">One Tools</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/todo">To Do</Link>
              {/* <a className="nav-link active" aria-current="page" href="todo">To Do</a> */}
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/notes">Note</Link>
              {/* <a className="nav-link active" aria-current="page" href="notes">Note</a> */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;