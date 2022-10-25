import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import Helmet from '../components/helmet/helmet'
import heroImg from '../assets/images/hero-img.png'
import "../styles/home.css" 
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Services from '../services/services'
import ProductList from '../components/UI/productList'
import  products from '../assets/data/products'
const Home = () => {

  const [data, setdata] = useState(products)

  const year = new Date().getFullYear()

  useEffect(() => {
      const filteredProducts = products.filter((item)=>item.category === 'chair')

      setdata(filteredProducts)
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

      <section className='trending__products'>
          <Container>
            <Row>
              <Col lg="12" className='text-center'>
                <h2 className='section__title'>Trending Products</h2>
              </Col>
              <ProductList data={data}/>
            </Row>
          </Container>
      </section>
    </Helmet>
  )
}

export default Home