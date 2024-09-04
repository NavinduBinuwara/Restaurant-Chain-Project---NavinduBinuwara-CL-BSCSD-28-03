import React, { useContext, useState } from 'react';
import axios from 'axios';
import './form.css';
import { toast } from 'react-toastify'
import { StoreContext } from '../../Context/StoreContext'
const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        message: ''
    });

    const [responseMessage, setResponseMessage] = useState('');
    const {  url} = useContext(StoreContext)
    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post( url +'/api/review/add', formData);
            if (response.data.success) {
                setResponseMessage('Review submitted successfully!');
                setFormData({
                    name: '',
                    email: '',
                    number: '',
                    message: ''
                });

                toast.success("message sent");
            } else {
                setResponseMessage('Failed to submit review. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting review:', error);
            toast.error('An error occurred. Please try again.');
        }
    };

    return (
        <div>
            <h2>Review</h2>
            <form onSubmit={handleSubmit} class="user-form">
                <div>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                    />
                </div>
                <div>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        required
                    />
                </div>
                <div>
                    <input
                        type="tel"
                        name="number"
                        value={formData.number}
                        onChange={handleChange}
                        placeholder="Your Phone Number"
                        required
                    />
                </div>
                <div>
                    <textarea
                        name="message"
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        required
                        class="user-text-area"
                    ></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
            {responseMessage && <p class="form-txt">{responseMessage}</p>}
        </div>
    );
};

export default Form;