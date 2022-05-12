import React from 'react'
import './Navbar.css'
import { Navbar, Nav, Container, Offcanvas, Card } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'


const Navbars = () => {
  return (
    <>
    <Navbar bg="light" expand={false}>
      <Container fluid>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Навигация</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <LinkContainer to="/">
                <Navbar.Brand>Галерея</Navbar.Brand>
              </LinkContainer>
              <LinkContainer to="/about">
                <Navbar.Brand>Обо мне</Navbar.Brand>
              </LinkContainer>
            </Nav>
            <Card>
              <Card.Img variant='top' src='src/img/myPhoto.jpg'/>
                <Card.Body>
                  <Card.Title>Артем</Card.Title>
                  <Card.Text>
                    e-mail: artx8artx@gmail.com
                  </Card.Text>
                </Card.Body>
            </Card>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
    </>
  )
}

export default Navbars