import React from 'react';
import './header.css'
import { Container, Row } from 'reactstrap';
import logo from '../../assets/images/eco-logo.png'
import user_icon from '../../assets/images/user-icon.png'
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';


const nav__link = [
  {
    path:'home',
    display:'Home'
  },
  {
    path:'shop',
    display:'Shop'
  },
  {
    path:'cart',
    display:'Cart'
  }
]

const Header = () => {
  return (
    <header className='header'>
      <Container>
        <Row>
          <div className='nav__wrapper'>
            <div className="logo">
              <img src={logo} alt="logo" />
              <div>
                <h1>MyShop</h1>
              </div>
            </div>
            <div className="navigation">
              <ul className='menu'>
                  {
                    nav__link.map((item,index)=>(
                      <li className='nav__item' key={index}>
                          <NavLink to={item.path} className={(navclass)=>navclass.isActive ? 'nav__active' : ''}>{item.display}</NavLink>
                      </li>
                    ))
                  }
              </ul>
            </div>
            <div className="nav__icons">
              <span className='fav__icon'>
                <i className='ri-heart-line'></i>
                <span className='badge'>1</span>
              </span>
              <span className='cart__icon'>
                <i className='ri-shopping-bag-line'></i>
                <span className='badge'>1</span>
              </span>
              <span>
                <motion.img whileTap={{scale:1.2}} src={user_icon} alt="" />
              </span>
            </div>
            <div className="mobile__menu">
              <span>
                <i className='ri-menu-line'></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header