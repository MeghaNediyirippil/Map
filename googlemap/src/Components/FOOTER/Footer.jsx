import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Footer() {
  return (
    <div>
        <footer className="m-3">
      <Container>
        <Row>
          <Col md={6} >
            <h5>Contact Us</h5>
            <p>Email: map@example.com</p>
            <p>Phone: 123-456-7890</p>
          </Col>
          <Col md={6}>
            <h5>Follow Us</h5>
            <ul className="list-unstyled d-flex justify-content-center gap-5">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center">© 2024 MAP</p>
          </Col>
        </Row>
      </Container>
    </footer>
    </div>
  )
}

export default Footer