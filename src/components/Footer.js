import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <h1>Contact Info:</h1>
            <p>Mail ID: suvansh.nayyar@outlook.com</p>
            <p>Contact No.: 9354361137</p>
            <p>Location: New Delhi, India</p>
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/suvansh-nayyar-16b278185/"><img src={navIcon1} alt="" /></a>
                <a href="https://www.facebook.com/suvansh.suvansh.58/"><img src={navIcon2} alt="" /></a>
                <a href="https://www.instagram.com/official_suvansh/"><img src={navIcon3} alt="" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
