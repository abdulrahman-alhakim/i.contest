import React, { useState } from 'react';
import axios from 'axios';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', description: '' });
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/send`, formData);
      console.log(response.data);
      setMessage(response.data.message); // Set the success message from backend
    } catch (error:any) {
      console.error(error);
      if (error.response && error.response.data) {
        setMessage(error.response.data.message); // Set the error message from backend
      } else {
        setMessage('Failed to send the message.'); // Fallback error message
      }
    }
  };
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Your Name" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Your Email" onChange={handleChange} required />
      <textarea name="description" placeholder="Your Message" onChange={handleChange} required></textarea>
      <button type="submit">Send</button>
      {message && <p>{message}</p>}
    </form>
  );
}
