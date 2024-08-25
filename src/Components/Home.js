import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import BannerBackground from '../assets/home-banner-background.png'
import { FiArrowRight } from 'react-icons/fi'
import {Link} from 'react-router-dom'


const Home = () => {
  return (
      <div className='home-container'>
        <Navbar />
        <div className='home-banner-container'>
          <div className='home-bannerImage-container'>
            <img src={BannerBackground} />
          </div>
          <div className='home-text-section'>
            <h1 className='primary-heading'>
              Warm Up Your Space with Timeless Wood Furnishings
            </h1>
            <p className='primary-text'>
              Crafted from high-quality, sustainably sourced materials, our pieces are built to last and add a touch of elegance to any space.
            </p>
            <Link to='/login' className='secondary-button'>
              Enter name <FiArrowRight />
            </Link>
          </div>
        </div>
        <Footer />
      </div>
  )
}

export default Home