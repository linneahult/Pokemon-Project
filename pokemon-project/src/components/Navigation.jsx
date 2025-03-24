import "../styles/Navigation.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Navigation = () => {
  return (
    <Navbar expand="lg" className="custom-navbar fixed-top">
      <NavLink to="/" className="navbar-brand">
        <img src="/picture1.png" className="logo" alt="Logo" />
      </NavLink>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar-text">
          <NavLink to="/about" className="nav-link">
            About website
          </NavLink>
          <NavLink to="/forum" className="nav-link">
            Forum
          </NavLink>
          <NavLink to="/pokedex" className="nav-link">
            Pokédex
          </NavLink>
          <NavLink to="/ teams" className="nav-link">
            Teams
          </NavLink>
        </Nav>
      </Navbar.Collapse>

      <div className="sigin-container">
        <button className="rounded-pill px-4 signin-button">Sign In</button>
      </div>
    </Navbar>
  );
};

export default Navigation;
