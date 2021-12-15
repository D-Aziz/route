import React from "react";
import {
  Container,
  Offcanvas,
  Navbar,
  Nav,
  NavDropdown,
  FormControl,
  Form,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
const NavBar = ({ settext }) => {
  return (
    <div>
      <Navbar bg="dark" variant={"dark"} expand={false}>
        <Container fluid>
          <Navbar.Brand href="#">Go My Cima</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                Welcome
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="eheeh">
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Link to="/">Home</Link>
                <Link to="/Movies">Movies</Link>
                <NavDropdown title="DropDown" id="offcanvasNavbarDropdown">
                  <Link to="/About">About</Link>
                  <br></br>
                  <Link to="/Contact">Contact</Link>
                  <NavDropdown.Divider />
                  <Link to="#action5">Something else here</Link>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  onChange={(e) => settext(e.target.value)}
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
