import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import AboutBackground from '../assets/about-background.png'
import AboutBackgroundImage from '../assets/about-background-image.png'

const About = () => {
  return (
    <div className='about-container'>
        <Navbar />
        <div className='about-section-container'>
            <div className='about-background-image-container'>
                <img src={AboutBackground} />
            </div>
            <div className='about-section-image-container'>
                <img src={AboutBackgroundImage} className='about-section-image' />
            </div>
            <div className='about-section-text-container'>
                <p className='primary-subheading'>
                    About us
                </p>
                <h1 className='primary-heading'>
                    More Than Wood, We Build Trust: Values at the Heart of Our Craft
                </h1>
                <p className='primary-text'>
                    We are more than just a wood furniture company. We are passionate craftspeople dedicated to creating beautiful, timeless pieces that will be cherished for generations. Since establishment, our dedication to quality and craftsmanship has been passed down through the years.
                </p>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default About