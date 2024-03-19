import { NavbarBrand } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";

function MyNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <NavbarBrand to={"/"}>Clinica kebab</NavbarBrand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className={"nav-link"} to="/">
              Home
            </NavLink>

            <NavDropdown title="Proprietari" id="basic-nav-dropdown">
              <NavDropdown.Item to={"/Proprietario"} as={NavLink} className={""}>
                Lista proprietari
              </NavDropdown.Item>
              <NavDropdown.Item to={"/Proprietario/Create"} as={NavLink} className={""}>
                Aggiungi proprietario
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Animali" id="basic-nav-dropdown">
              <NavDropdown.Item to={"/Animale/Create"} as={NavLink} className={""}>
                Aggiungi animale
              </NavDropdown.Item>
              <NavDropdown.Item to={"/Animale/Index"} as={NavLink}>
                Elenco Animali
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Visite" id="basic-nav-dropdown">
              <NavDropdown.Item to={"/Visite/Index"} as={NavLink} className={""}>
                Lista visite
              </NavDropdown.Item>
              <NavDropdown.Item to={"/Visite/Create"} as={NavLink} className={""}>
                Aggiungi visita
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Ricoveri" id="basic-nav-dropdown">
              <NavDropdown.Item to={"/Ricoveri/Index"} as={NavLink} className={""}>
                Lista ricoveri
              </NavDropdown.Item>
              <NavDropdown.Item to={"/Ricoveri/Create"} as={NavLink} className={""}>
                Aggiungi ricovero
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <NavLink className={"nav-link"} to={"/login"}>
            Login
          </NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
