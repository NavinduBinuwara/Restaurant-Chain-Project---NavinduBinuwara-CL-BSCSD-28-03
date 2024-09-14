import React from 'react'
import { useState } from 'react';
import './style.css'
import { assets, url } from '../../assets/assets';
import { toast } from 'react-toastify';
import axios from 'axios';
const Restaurant  = () => {
  const [restaurant, setRestaurant] = useState({
    name: '',
    location: '',
    phone: '',
    email: '',
    image: '',
    description: ''
});

const handleChange = (e) => {
    const { name, value, files } = e.target;
    setRestaurant({
      ...restaurant,
      [name]: files ? files[0] : value  // Handle file input
    });
};


const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', restaurant.name);
    formData.append('location', restaurant.location);
    formData.append('phone', restaurant.phone);
    formData.append('email', restaurant.email);
    formData.append('image', restaurant.image);  
    formData.append('description', restaurant.description);

    try {
        const response = await axios.post(`${url}/api/restaurant/add`, formData, { headers: {
            'Content-Type': 'multipart/form-data',  
          }},);
        console.log('Restaurant added:', response.data);
        toast.success('Restaurant Added')
    } catch (error) {
      toast.error('Restaurant not  added')
    }
};

return (

  <div>
     <h1>add Restaurant</h1>
     <form onSubmit={handleSubmit}>
        <h2>Add Restaurant</h2>
        <div className='add-img-upload flex-col'>
                    <p>Upload image</p>
                    <input onChange={handleChange} type="file" name="image" accept="image/*" id="image" hidden required />
                   
                </div>
        <input name="name" placeholder="Name" onChange={handleChange} value={restaurant.name} />
        <input name="location" placeholder="Location" onChange={handleChange} value={restaurant.location} />
        <input name="phone" placeholder="Phone" onChange={handleChange} value={restaurant.phone} />
        <input name="email" placeholder="Email" onChange={handleChange} value={restaurant.email} />
        
        <textarea name="description" placeholder="Description" onChange={handleChange} value={restaurant.description}></textarea>
        <button type="submit">Add Restaurant</button>
    </form>

  </div>

  )
}

export default Restaurant ;