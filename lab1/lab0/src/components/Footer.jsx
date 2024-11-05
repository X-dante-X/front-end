import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "./Footer.css"

function Footer() {
  return (
    <footer className="bg-light fixed-bottom container-fluid ustify-content-between align-items-center text-center py-4">
      <Container>
        <Row>
          <Col className="container-fluid d-flex flex-row justify-content-between align-items-center" >
            <img
              src="wsei.png"
              alt="Logo Uczelni"
              className="footer-logo"
            />
            <p>Autor: Yevhenii Solomchenko</p>
            <p>
              Email:{" "}
              <a href="mailto:yevhenii.solomchenko@microsoft.wsei.edu.pl">yevhenii.solomchenko@microsoft.wsei.edu.pl</a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
