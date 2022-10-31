import React from 'react'
import { motion } from 'framer-motion'
import '../../styles/product-card.css'
import { Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../redux/slices/cartSlice'

const ProductCard = ({ item }) => {

    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(cartActions.addItem({
            id: item.id,
            productName: item.productName,
            image: item.imgUrl,
            price: item.price,
        }))

        alert("Product added to the Cart")
    }

    return (
        <Col lg='3' md='4' className='mb-2'>
            <div className='product__item'>
                <div className='product__img'>
                    <motion.img whileHover={{ scale: 0.9 }} src={item.imgUrl} alt="" />
                </div>
                <div className='p-2 product__info' style={{ height: 100 }}>
                    <h3 className='product__name'>
                        <Link to={`shop/${item.id}`}>{item.productName}</Link>
                    </h3>
                    <span>{item.category}</span>
                </div>
                <div className="product__card-bottom d-flex alin-items-center justify-content-between p-2">
                    <span className='price'>${item.price}</span>
                    <motion.span whileTap={{ scale: 1.1 }} onClick={addToCart}><i className='ri-add-line'></i></motion.span>
                </div>
            </div>
        </Col>
    )
}

export default ProductCard