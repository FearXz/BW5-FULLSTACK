import { NavbarBrand } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

function MyNavbar() {

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <NavbarBrand to={"/"}>Clinica kebab</NavbarBrand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className={"nav-link"} to="/">Home</NavLink>
            <NavLink className={"nav-link"} to={"api/Proprietario"}>Proprietari</NavLink>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
            <NavLink className={"nav-link"} to={"/login"}>Login</NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;