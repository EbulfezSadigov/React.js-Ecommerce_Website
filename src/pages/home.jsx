import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import Helmet from '../components/helmet/helmet'
import heroImg from '../assets/images/hero-img.png'
import counterImg from '../assets/images/counter-timer-img.png'
import "../styles/home.css"
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Services from '../services/services'
import ProductList from '../components/UI/productList'
import products from '../assets/data/products'
import Clock from '../components/UI/clock'

const Home = () => {

  const [trendingproducts, setTrendingproducts] = useState([])
  const [mobileproducts, setMobileproducts] = useState([])
  const [wirelessproducts, setWirelessproducts] = useState([])
  const [bestsales, setBestsales] = useState([])
  const [popularproducts, setPopularproducts] = useState([])

  const year = new Date().getFullYear()

  useEffect(() => {
    const filteredProducts = products.filter((item) => item.category === 'chair')
    const filteredbestProducts = products.filter((item) => item.category === 'sofa')
    const mobileProducts = products.filter((item) => item.category === 'mobile')
    const wirelessProducts = products.filter((item) => item.category === 'wireless')
    const popularProducts = products.filter((item) => item.category === 'watch')

    setBestsales(filteredbestProducts)
    setTrendingproducts(filteredProducts)
    setMobileproducts(mobileProducts)
    setWirelessproducts(wirelessProducts)
    setPopularproducts(popularProducts)
  }, [])


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
                <motion.button whileTap={{ scale: 1.2 }} className='buy__btn' style={{backgroundColor:'var(--primary-color)'}}><Link style={{color:'white'}} to='shop'>SHOP NOW</Link></motion.button>
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

      <Services />

      <section className='trending__products'>
        <Container>
          <Row>
            <Col lg="12" className='text-center'>
              <h2 className='section__title'>Trending Products</h2>
            </Col>
            <ProductList data={trendingproducts} />
          </Row>
        </Container>
      </section>

      <section className='best__sales'>
        <Container>
          <Row>
            <Col lg="12" className='text-center'>
              <h2 className='section__title'>Best Sales</h2>
            </Col>
            <ProductList data={bestsales} />
          </Row>
        </Container>
      </section>

      <section className="timer__count">
        <Container>
          <Row>
            <Col lg='6' md='12' className='count__down-col'>
              <div className="clock__top-content">
                <h4 className='text-white fs-6 mb-2'>Limited Offers</h4>
                <h3 className='text-white fs-5 mb-3'>Quality Armchair</h3>
              </div>
              <Clock/>
              <motion.button whileTap={{scale:1.2}} className='buy__btn store__btn'><Link to='/shop'>Visit Store</Link></motion.button>
            </Col>
            <Col lg='6' md='12' className='text-end counter__img'>
              <img src={counterImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className='new__arrivals'>
      <Container>
          <Row>
            <Col lg="12" className='text-center mb-5'>
              <h2 className='section__title'>New Arrivals</h2>
            </Col>
            <ProductList data={mobileproducts} />
            <ProductList data={wirelessproducts} />
          </Row>
        </Container>
      </section>

      <section className='popular__category'>
      <Container>
          <Row>
            <Col lg="12" className='text-center mb-5'>
              <h2 className='section__title'>Popular in Category</h2>
            </Col>
            <ProductList data={popularproducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Home