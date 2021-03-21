// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Header.css';
// import header from '../../images/header.png';
// const Header = () => {
//     return (
//         <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${header})` }} className="header">
//         <nav className="nav">
//             <ul>
//                 <li>
//                    <h1 className="logo">Townish Rider</h1>
//                 </li>
//                 <li>
//                     <Link to="/home">Home</Link>
//                 </li>
//                 <li>
//                     <Link to="/Destination">Destination</Link>
//                 </li>
//                 <li>
//                     <Link to="/Blog">Blog</Link>
//                 </li>
//                 <li>
//                     <Link to="/Contact">Contact</Link>
//                 </li>
//                 <li>
//                     <Link to="/login">Login</Link>
//                 </li>
               
//             </ul>
//         </nav>
        
//     </div>
// );
// };

// export default Header;

import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from '../../App';
export const linkStyle = {
  textDecoration: 'none',
  color: 'black',
  fontSize: '1rem',
  
}
const Header = () => {
  const [loggedInUser,setLoggedInUser] = useContext(UserContext)
  const brandLogo = {
    fontSize:'2rem',
  }
  return (
      <Navbar bg="transparent"  expand="lg" collapseOnSelect>
        <Container>
        <Link style={brandLogo} className="navbar-brand font-weight-bold" to="/">Townish Rider</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link style={linkStyle} className="mx-3 my-2" to="/home">Home</Link>
            <Link style={linkStyle} className="mx-3 my-2" to="/destination/bk1">Destination</Link>
            <Link style={linkStyle} className="mx-3 my-2 " to="/blog" aria-disabled>Blog</Link>
            <Link style={linkStyle} className="mx-3 my-2" to="/contact">Contact</Link>
            {
              loggedInUser.isSignedIn ? 
                <strong style={{paddingTop:'9px'}}>{loggedInUser.name}</strong>
              : <Link style={linkStyle} className="btn btn-danger mx-3" to="/login"> Log in</Link>
            }
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};

export default Header;
