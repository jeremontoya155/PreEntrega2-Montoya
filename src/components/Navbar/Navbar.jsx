import "./navbar.css";
import Secciones from "./secciones/Secciones";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="nav-link" to="/">
            <button className="btn btn-secondary">
              {" "}
              <button className="btn btn-secondary">🏡Home</button>
            </button>
          </Link>

          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav me-auto">
              <Secciones />
            </ul>
          </div>
        </div>
        <CartWidget />
      </nav>
    </>
  );
};

export default Navbar;
{
  /*
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
<div className="container-fluid">
    <Secciones/>
    <CartWidget/>
</div>
</nav>
  */
}
