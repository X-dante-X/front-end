import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-light text-center py-4">
        <h1>
            qwe
        </h1>
      <Container>
        <Row>
          <Col>
            <img
              src="..\assets\WSEI-Kraków-logo.png"
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
