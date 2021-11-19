import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

import logo from '../../assets/rick-and-morty.ico'
import github from '../../assets/github.svg'
import linkedin from '../../assets/linkedin.svg'

export default function Footer() {


  return (
<footer className="footer-style mt-auto">
      <Container>
        <Row className="align-items-center" style={{ minHeight: '6rem' }}>
          <Col className="d-none d-md-block" md="4">
            <Image src={logo} alt="logo" style={{ height: '5rem' }} />
          </Col>

          <Col className="d-flex flex-column align-items-center mb-3 mb-md-0" md="4">
            <a className="d-flex justify-content-center mb-2 text-decoration-none text-white" target="_blank" rel="noreferrer" href="https://github.com/RodrigoM10">
              <img className="me-2" src={github} alt="" />
              <h5 className="mb-1">Github</h5>
            </a>
            <a className="d-flex justify-content-center text-decoration-none text-white" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/rodrigo-mendoza-b8b6931a4/">
              <img className="me-2" src={linkedin} alt="" />
              <h5 className="mb-0">linkedIn</h5>
            </a>
          </Col>

          <Col className="text-center text-md-end" md="4">
            <h5 className="text-white mb-2">Copyright RodrigoM10®</h5>
            <h5 className="text-white mb-0">Tucumán - Argentina 2021</h5>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
