import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav,NavDropdown,Form,FormControl,Button} from '../../../node_modules/react-bootstrap';
import logo from '../../images/education_computer_school_graduate_cap_monitor_icon_149680.png';
import './Header.css'
const Header = () => {
    return (
      <React.Fragment>
       <div className="feature-image">
             <img src="data:image/png;base64,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" alt="" />
       </div>
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="#home"><img className="logo-image" src={logo} alt=""/></Navbar.Brand>
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
        </React.Fragment>
    );
};

export default Header;