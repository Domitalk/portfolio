import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'




function Navi() {
    // For some reason I need to refresh with as={Link} to="/" in order to change the view. 
    // Either fix this issue or else leave as a non-SPA

    return (
        <>
            <Navbar fixed="top" bg="light" variant="light">
                <Navbar.Brand as={AnchorLink} href="#Home">Dominic M. Chu</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link as={AnchorLink} href="#About">About Me</Nav.Link>
                    <Nav.Link as={AnchorLink} href="#Projects">Projects</Nav.Link>
                    <Nav.Link as={AnchorLink} href="#Blogs">Blog Posts</Nav.Link>
                </Nav>
            </Navbar>
        </>
    )
    // return (
    //     <>
    //         <Navbar static="top" bg="light" variant="light">                
    //             <Navbar.Brand >Dominic Chu</Navbar.Brand>
    //             <Nav className="mr-auto">
    //                 <Nav.Link as={Link} to="/portfolio">Home</Nav.Link>
    //                 <Nav.Link as={Link} to="/portfolio/projects">Projects</Nav.Link>
    //                 <Nav.Link as={Link} to="/portfolio/about">About</Nav.Link>
    //             </Nav>
    //         </Navbar>
    //     </>
    // )
}

export default Navi; 