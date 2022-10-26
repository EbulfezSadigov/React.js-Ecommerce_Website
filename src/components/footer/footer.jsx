import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import './footer.css'
import logo from '../../assets/images/eco-logo.png'


const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='4'>
            <div className="logo">
              <img src={logo} alt="logo" />
              <div>
                <h1>MyShop</h1>
              </div>

              <p className='footer__text mt-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quos ut cum quis ex laboriosam velit impedit alias officia optio.
              </p>
            </div>
          </Col>
          <Col lg='3'></Col>
          <Col lg='2'></Col>
          <Col lg='3'></Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer