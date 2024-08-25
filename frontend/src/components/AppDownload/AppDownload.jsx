import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
    return (
        <div className='app-download' id='app-download'>
            <p>About Binu Restaurant</p>
            <p className='about-us-txt'>Welcome to Binu Restaurant, where tradition meets innovation! Located in the heart of colombo,
                 Binu Restaurant is dedicated to bringing you the best of modern cuisine with a modern twist. Our chefs passionately craft dishes using the finest ingredients, blending local and exotic flavors to create a menu that offers something for everyone.
                 At Binu Restaurant, we believe in creating memorable dining experiences. Our warm and inviting atmosphere, paired with exceptional service, makes every visit special—whether you're here for a casual meal or a celebratory gathering.
                 We're also committed to sustainability and supporting our local community, making choices that are good for you and the planet. Thank you for choosing Binu Restaurant; we look forward to serving you!</p>
            <p>For Better Experience Download <br />Tomato App</p>
            <div className="app-download-platforms">
                <img src={assets.play_store} alt="" />
                <img src={assets.app_store} alt="" />
            </div>
        </div>
    )
}

export default AppDownload
