import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Add from './pages/Add/Add'
import List from './pages/List/List'
import Orders from './pages/Orders/Orders'
import Offer from './pages/Offer/Offer'
import OfferList from './pages/OfferList/OfferList'
import Review from './pages/Review/Review'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Restaurant from './pages/Restaurant/Restaurant '


const App = () => {
  return (
    <div className='app'>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path="/add" element={<Add />} />
          <Route path="/list" element={<List />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/offer" element={<Offer />} /> 
          <Route path="/offer-list" element={<OfferList />} /> 
          <Route path="/review" element={<Review />} />
           <Route path="/restaurant" element={<Restaurant/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App