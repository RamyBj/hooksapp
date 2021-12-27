import React from "react";
import { Navbar, Container, Nav, FormControl } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";

const MyNav = ({ handleTitle, handleRating }) => {
  const ratingChanged = (newRating) => {
    handleRating(newRating);
  };

  const handleChange = (e) => {
    handleTitle(e.target.value);
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">NetFixe</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
        </Nav>
        <FormControl
          type="sherch"
          placeholder="Please Enter Your Search Here..."
          onChange={handleChange}
        />
      </Container>
      <ReactStars
        count={5}
        onChange={ratingChanged}
        size={28}
        activeColor="#ffd700"
      />
    </Navbar>
  );
};
export default MyNav;
