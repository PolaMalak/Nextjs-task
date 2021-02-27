import navStyles from '../styles/Navbar.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarC from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
const Navbar = () => {
    return (
        <div>
             <NavbarC bg="success" expand="lg" id="myNavbar" fixed="top">
      <NavbarC.Toggle aria-controls="basic-navbar-nav" />
      <NavbarC.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" id="myNavItem">
          <Nav.Link className={`${navStyles.navItem} ${navStyles.login}`} href="/" id="myNavItem">Login</Nav.Link>
          <Nav.Link className={`${navStyles.navItem} ${navStyles.register}`} href="/" id= "myNavItem">Register</Nav.Link>
        </Nav>
      </NavbarC.Collapse>
    </NavbarC>
        </div>
    )
}

export default Navbar