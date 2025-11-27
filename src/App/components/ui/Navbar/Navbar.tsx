import React from "react";
import styles from "./Navbar.module.css";
import { Container, Nav, Navbar as Nvb } from "react-bootstrap";

import "../../../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router";
const Navbar: React.FC = () => {
  return (
    <div className={styles.Navbar} data-testid="Navbar">
      <Nvb bg="dark" data-bs-theme="dark">
        <Container>
          <Link to="/" className="navbar-brand">
            Navbar
          </Link>
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              Home
            </Link> <Link to="/Thumbnail" className="nav-link">
              Thumbnail
            </Link>
            <Link className="nav-link" to="/Editor">
              new meme ...{" "}
            </Link>
            <Link className="nav-link" to="/Editor/2">
              Edit id 2{" "}
            </Link>
          </Nav>
        </Container>
      </Nvb>
    </div>
  );
};

export default Navbar;
