import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import Helmet from '../components/helmet/helmet'
import heroImg from '../assets/images/hero-img.png'
import "../styles/home.css" 
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Services from '../services/services'

const Home = () => {

  const year = new Date().getFullYear()

  return (
    <Helmet title={"Home"}>
      <section className='hero__section'>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className="hero__content">
                <p className="hero__subtitle">
                  Trending product in {year}
                </p>
                <h2>Make your Interior More Minimalistic & Modern</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem at eveniet ratione non dolores reiciendis explicabo? Est quis voluptatem perferendis.</p>
                <motion.button whileTap={{scale:1.2}} className='buy__btn'><Link to='shop'>SHOP NOW</Link></motion.button>
              </div>
            </Col>
            <Col lg='6' md='6'>
              <div className="hero__img">
                <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Services/>
    </Helmet>
  )
}

export default Home