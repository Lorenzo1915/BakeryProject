
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { ReactComponent as LogoImg } from "../../assets/icons/logo.svg";

function NavBar() {
  return (
    <Navbar style={{backgroundColor: "lightyellow"}} expand="lg">
      <Container>
        <Navbar.Brand href="/home">  
         <div className='navbar-logo'>               
            <div className='img-logo'><LogoImg/>
            </div>
            Sweets&Cakes
        </div>  
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">Chi siamo</Nav.Link>
            <Nav.Link href="http://localhost:3000/home#cards">Ricette</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;