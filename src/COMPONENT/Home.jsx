import React, { useContext } from 'react'
import { Container, Form, Nav, Navbar } from 'react-bootstrap'
import { SiCodechef } from "react-icons/si";
import { FaSearch } from 'react-icons/fa'
import { sample } from '../App';
const Home = () => {
  const { search, setsearch } = useContext(sample)

  const getinp = (e) => {
    setsearch(e.target.value)
  }
  console.log(search);

  const submit = (e) => {
    e.preventDefault();
  }
  return (
    <div style={{ backgroundColor: "#31525B" }}>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid >
          <Navbar.Brand href="#" style={{ fontFamily: "cursive", fontSize: "40px", color: "#FFA101" }}>
            <SiCodechef style={{ width: "60px", height: "70px" }} /> Food Chef</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >

            </Nav>
            <Form style={{ display: "flex", border: "3px solid #FFA101", padding: "5px", borderRadius: "20px" }} onSubmit={submit}>
              <FaSearch style={{ width: "20px", height: "18px", marginTop: "9px", color: "#FFA101", marginLeft: "10px" }} />
              <Form.Control
                type="search"
                placeholder="Search recipe"
                className="me-2"
                aria-label="Search"
                style={{ border: "none", backgroundColor: "#31525B", fontSize: "18px" }}
                onChange={getinp}
              />

            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Home