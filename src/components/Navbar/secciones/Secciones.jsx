import { Link } from "react-router-dom";
const Secciones = () => {
  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <Link className="nav-link" to="/category/1">
          <button className="btn btn-secondary">Anillos</button>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/category/2">
          <button className="btn btn-secondary">Cadenas</button>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/category/3">
          <button className="btn btn-secondary">Pulseras</button>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/category/4">
          <button className="btn btn-secondary">Diges</button>
        </Link>
      </li>
    </ul>
  );
};

export default Secciones;
