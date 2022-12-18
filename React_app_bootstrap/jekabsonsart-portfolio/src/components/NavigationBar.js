import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styled from 'styled-components';
import { Container, NavDropdown } from 'react-bootstrap';

const Styles = styled.div`
  .navbar {
    background-color: hsl(193, 85%, 42%);
  }
  .navbar-brand .navbar-nav .nav-link {
    color: #bbb;

    &:hover {
      color: #ebeef3;
    }
  }
`;

export default function NavigationBar() {
  return (
    <Styles>
      <Navbar expand='s'>
        <Navbar.Brand href='/'>
          <Container>jekabsonsart</Container>
        </Navbar.Brand>
        <Nav.Item>
          <Nav.Link href='/'>
            <Container>Home</Container>
          </Nav.Link>
        </Nav.Item>
        <Navbar.Toggle aria-controls='basic-navbar-nav'></Navbar.Toggle>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Item>
              <Container>
                <NavDropdown title='Family' id='basic-nav-dropdown'>
                  <NavDropdown.Item href='/AJ'>
                    <Container>
                      <Navbar.Brand>
                        <img
                          src='AJ_portfolio.jpg'
                          class='img-thumbnail'
                          alt='Albert Jekabsons'></img>
                      </Navbar.Brand>
                    </Container>
                  </NavDropdown.Item>
                  <NavDropdown.Item href='/JJ'>JJ</NavDropdown.Item>
                  <NavDropdown.Item href='/RJ'>RJ</NavDropdown.Item>
                </NavDropdown>
              </Container>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
}
