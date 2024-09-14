import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Add.css'
import { toast } from 'react-toastify';
import { assets, url } from '../../assets/assets';
function MakeFoodAvailable() {
    const [foodItems, setFoodItems] = useState([]);
    const [restaurants, setRestaurants] = useState([]);
    const [availability, setAvailability] = useState({
        foodId: '',
        restaurantId: '',
        availability: true
    });

    console.log(availability)
    useEffect(() => {
        const fetchData = async () => {
            const foodRes = await axios.get(`${url}/api/food/list`);

            const restaurantRes = await axios.get('http://localhost:4001/api/restaurant/list');
            setFoodItems(foodRes.data.data);
            setRestaurants(restaurantRes.data.data);          
            console.log(restaurantRes.data.data)
        };
        fetchData();
    }, []);

    const handleChange = (e) => {
        setAvailability({ ...availability, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {           
            const formData = {
                foodId: availability.foodId,
                restaurantId: availability.restaurantId,
                availability: availability.availability
            };
            console.log(formData,"form")   
          const response = await axios.post(`${url}/api/restaurant/availability`, formData);
          toast.success("updated")
        } catch (error) {
            toast.error('Error updating food availability:', error);
        }
    };

    return (
        <div >
        <form onSubmit={handleSubmit}>
            <h2>Make Food Available</h2>
            <select className="select"  name="foodId" onChange={handleChange} value={availability.foodId}>
                <option value="">Select Food Item</option>
                {foodItems && foodItems.map(food => (
                    <option key={food._id} value={food._id}>{food.name}</option> 
                ))}
            </select>
            <select  className="select"  name="restaurantId" onChange={handleChange} value={availability.restaurantId}>
                <option value="">Select Restaurant</option>
                { restaurants && restaurants.map(restaurant => (
                    <option key={restaurant._id} value={restaurant._id}>{restaurant.name}</option>
                ))}
            </select>
            <label className='check-container'>
                <p> Available</p>
                <input       
                className='checkbox'      
                    type="checkbox" 
                    name="availability" 
                    checked={availability.availability} 
                    onChange={(e) => setAvailability({ ...availability, availability: e.target.checked })} 
                />
            </label>
            <button  type="submit">Update Availability</button>
        </form>
        </div>
    );
}

export default MakeFoodAvailable;
