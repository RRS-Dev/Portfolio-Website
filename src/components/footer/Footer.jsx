import React from 'react'
import './Footer.css'
import {AiFillFacebook} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
import {FiTwitter} from 'react-icons/fi'


const Footer = () => {
  return (
   
   <footer>
    
        <a href="#home" className='footer__logo'>RajRS</a>
        <ul className='permalinks'>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="footer__socials">
          <a href="#"><AiFillFacebook/></a>
          <a href="#"><FiTwitter/></a>
         <a href="#"><BsInstagram/></a>
        </div>
        <div className="footer__copyright">
          <small>&copy; RajRS Portfolio Website. All Rights Reserved</small>
        </div>
   </footer>
  )
}

export default Footer