import React, { useState } from 'react';
import axios from 'axios';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', description: '' });

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/send', formData);
      console.log(response.data);
      // Handle the response here. For example, show a success message.
    } catch (error) {
      console.error(error);
      // Handle errors here, such as displaying a notification.
    }
  };

  const handleChange = (e:any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Your Name" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Your Email" onChange={handleChange} required />
      <textarea name="description" placeholder="Your Message" onChange={handleChange} required></textarea>
      <button type="submit">Send</button>
    </form>
  );
}
