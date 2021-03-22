import { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from '../../App';

import './Header.css';
export const linkStyle = {
  textDecoration: 'none',
  color: 'black',
  fontSize: '1rem',
  
};
const Header = () => {
  const [loggedInUser,setLoggedInUser] = useContext(UserContext)
  const brandLogo = {
    fontSize:'2rem',
  }
  return (
    
      
        <Navbar bg="transparent"  expand="lg" collapseOnSelect>
        <Container className="navDesign">
        <Link style={brandLogo} className="navbar-brand font-weight-bold" to="/">Townish Rider</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link style={linkStyle} className="mx-3 my-2 navStyle " to="/home">Home</Link>
            <Link style={linkStyle} className="mx-3 my-2 navStyle" to="/destination/bk1">Destination</Link>
            <Link style={linkStyle} className="mx-3 my-2 navStyle" to="/blog" aria-disabled>Blog</Link>
            <Link style={linkStyle} className="mx-3 my-2 navStyle" to="/contact">Contact</Link>
            {
              loggedInUser.isSignedIn ? 
                <strong style={{paddingTop:'9px'}}>{loggedInUser.name}</strong>
              : <Link style={linkStyle} variant="danger" className="btn btn-warning mx-3" to="/login"> Log in</Link>
            }
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
      
  );
};

export default Header;
