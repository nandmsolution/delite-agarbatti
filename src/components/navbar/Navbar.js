import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useState } from "react";

export const NavBar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expanded={expanded} bg="mint" fixed="top" expand="md">
      <Navbar.Brand className="mx-lg-auto ml-md-auto">
        <Nav.Link className="logo-font" as={Link} to="/">
          {" "}
          Delight{" "}
          <small style={{ fontSize: "0.95rem" }}>
            {" "}
            The fragnance you trust
          </small>
        </Nav.Link>
      </Navbar.Brand>
      <Navbar.Toggle
        onClick={() => setExpanded(expanded ? false : "expanded")}
        aria-controls="basic-navbar-nav"
      />
      <Navbar.Collapse
        style={{ fontSize: "1.6rem" }}
        className="logo-font"
        id="basic-navbar-nav"
      >
        <Nav className="ms-auto p-2">
          <Nav.Link
            onClick={() => setExpanded(false)}
            className="d-flex p-2 justify-content-end "
            as={Link}
            to="/"
          >
            Home
          </Nav.Link>
          <Nav.Link
            onClick={() => setExpanded(false)}
            className="d-flex p-2 justify-content-end"
            as={Link}
            to="/products"
          >
            Gallery
          </Nav.Link>
          <Nav.Link
            onClick={() => setExpanded(false)}
            className="d-flex p-2  justify-content-end"
            as={Link}
            to="/about"
          >
            About Us
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
