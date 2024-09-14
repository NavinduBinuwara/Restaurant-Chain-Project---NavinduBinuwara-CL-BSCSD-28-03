import React from 'react'
import  './Sidebar.css'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-options">
        <NavLink to='/add' className="sidebar-option">
            <img src={assets.add_icon} alt="" />
            <p>Add Items</p>
        </NavLink>
        <NavLink to='/list' className="sidebar-option">
            <img src={assets.order_icon} alt="" />
            <p>List Items</p>
        </NavLink>
        <NavLink to='/orders' className="sidebar-option">
            <img src={assets.order_icon} alt="" />
            <p>Orders</p>
        </NavLink>
        <NavLink to='/offer' className="sidebar-option">
            <img src={assets.order_icon} alt="" />
            <p>Offers</p>
        </NavLink>
        <NavLink to='/offer-list' className="sidebar-option">
            <img src={assets.order_icon} alt="" />
            <p>Offers list</p>
        </NavLink>
        <NavLink to='/review' className="sidebar-option">
            <img src={assets.order_icon} alt="" />
            <p>Review</p>
        </NavLink>
        <NavLink to='/restaurant' className="sidebar-option">
            <img src={assets.order_icon} alt="" />
            <p>Restaurants</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar
