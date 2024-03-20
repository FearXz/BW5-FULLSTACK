import { NavbarBrand } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";

function MyNavbar() {
  return (
    <div expand="lg" className=" navbar navbar-expand-lg  CustomNavBar">
      <Container>
        <NavbarBrand to={"/"}>
          <div className="d-flex flex-column align-items-center justify-content-center">
            <img
              src="https://www.clinicaveterinariadesantis.it/wp-content/uploads/2021/10/Logo-Clinica-Veterinaria-Patrizia-De-Santis.png" // Replace with your image path
              className="d-inline-block align-top"
              alt="Clinica kebab logo"
              style={{ width: "80px" }}
            />
            <p className="m-0" id="epiclinic">
              EpiClinic
            </p>
          </div>
        </NavbarBrand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="nav me-auto">
            <NavLink className={"nav-link"} to="/">
              Home
            </NavLink>

            <NavDropdown title="Proprietari" id="basic-nav-dropdown">
              <NavDropdown.Item to={"/Proprietario"} as={NavLink} className={"custom-dropdown-item"}>
                Lista proprietari
              </NavDropdown.Item>
              <NavDropdown.Item to={"/Proprietario/Create"} as={NavLink} className={""}>
                Aggiungi proprietario
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Animali" id="basic-nav-dropdown">
              <NavDropdown.Item to={"/Animale"} as={NavLink}>
                Lista Animali
              </NavDropdown.Item>
              <NavDropdown.Item to={"/Animale/Create"} as={NavLink} className={""}>
                Aggiungi animale
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Visite" id="basic-nav-dropdown">
              <NavDropdown.Item to={"/Visite"} as={NavLink} className={""}>
                Lista visite
              </NavDropdown.Item>
              <NavDropdown.Item to={"/Visite/Create"} as={NavLink} className={""}>
                Aggiungi visita
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Ricoveri" id="basic-nav-dropdown">
              <NavDropdown.Item to={"/Ricovero"} as={NavLink} className={""}>
                Lista ricoveri
              </NavDropdown.Item>
              <NavDropdown.Item to={"/Ricovero/Create"} as={NavLink} className={""}>
                Aggiungi ricovero
              </NavDropdown.Item>
            </NavDropdown>
          </div>
          <div>
            <NavLink className={"nav-link"} to={"/login"}>
              Login
            </NavLink>
          </div>
        </Navbar.Collapse>
      </Container>
    </div>
  );
}

export default MyNavbar;
