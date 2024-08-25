import React from 'react'
import Logo from '../assets/trademark.png'
import { BsTwitter } from 'react-icons/bs'
import { SiLinkedin } from 'react-icons/si'
import { BsYoutube } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer-wrapper'>
        <div className='footer-section-one'>
            <div className='footer-logo-container'>
                <img src={Logo} />
            </div>
            <div className='footer-icons'>
                <a href="https://x.com" target='_blank'><BsTwitter /></a>
                <a href="https://linkedin.com"><SiLinkedin /></a>
                <a href="https://youtube.com"><BsYoutube /></a>
                <a href="https://facebook.com"><FaFacebookF /></a>
            </div>
        </div>
        <div className='footer-section-two'>
            <div className='footer-section-columns'>
                <span>+94 70 123 4567</span>
                <span>info@timberly.live</span>
                <span>admin@timberly.live</span>
                <span>contact@timberly.live</span>
            </div>
        </div>
        <div className='footer-section-three'>
            <div className='footer-section-columns'>
                <Link to="/terms">Terms & Conditions</Link>
                <span/>
                <Link to="/privacy">Privacy</Link>
            </div>
        </div>
    </div>
  )
}

export default Footer