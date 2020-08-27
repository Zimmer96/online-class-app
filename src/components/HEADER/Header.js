import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav,NavDropdown,Form,FormControl,Button} from '../../../node_modules/react-bootstrap';
import logo from '../../images/education_computer_school_graduate_cap_monitor_icon_149680.png';
import './Header.css'
const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="#home"><img className="logo-image" src={logo} alt="" srcset=""/></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
      <Nav.Link className="nav-feature" >Udachi</Nav.Link>
        <Nav.Link className="nav-feature" href="#features">Catagories</Nav.Link>
        <Nav.Link className="nav-feature" href="#pricing">My courses</Nav.Link>
        <NavDropdown className="nav-feature" title="More Features" id="collasible-nav-dropdown">
          <NavDropdown.Item className="nav-option" href="#action/3.1">Learn on Udachi</NavDropdown.Item>
          <NavDropdown.Item className="nav-option" href="#action/3.2">Teach on udachi</NavDropdown.Item>
          <NavDropdown.Item className="nav-option" href="#action/3.3">Support us</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated items</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Nav>
        <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-primary">Search</Button>
    </Form>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
        </div>
    );
};

export default Header;