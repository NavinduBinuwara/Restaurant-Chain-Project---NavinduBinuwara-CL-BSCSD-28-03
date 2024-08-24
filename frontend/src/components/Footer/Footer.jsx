import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>When you dine at Binu Restaurant, you're not just enjoying a meal – you're embarking on a culinary journey. Our carefully curated menu offers something for everyone, from classic dishes that remind you of home to bold new flavors that excite the palate. Whether you're here for a casual lunch, a romantic dinner, or a special celebration, Binu Restaurant is the perfect setting.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+94 0765832784</li>
                <li>contact@binurestaurant.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © Binurestaurant.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
