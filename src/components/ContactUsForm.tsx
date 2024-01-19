import React, { useState, ChangeEvent, FormEvent } from 'react';
import emailjs from 'emailjs-com';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from "../images/carcharging.jpeg"

interface IState {
  name: string;
  email: string;
  message: string;
}

interface IProps {
  data?: {
    address?: string;
    phone?: string;
    email?: string;
    facebook?: string;
    twitter?: string;
    youtube?: string;
  };
}

export const ContactUsForm: React.FC<IProps> = (props) => {
  const [state, setState] = useState<IState>({ name: '', email: '', message: '' });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.currentTarget, 'YOUR_USER_ID')
      .then(
        (result) => {
          console.log(result.text);
          setState({ name: '', email: '', message: '' });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="container mt-5">
      <div className="row">
      <div className="col-md-6">
          <img 
            src={image} 
            alt="Descriptive Alt Text"
            className="img-fluid" 
            loading="lazy" 
          />
        </div>
        <div className="col-md-6">
          <h2>Get In Touch</h2>
          <p>Please fill out the form below to send us an email and we will get back to you as soon as possible.</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={state.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={state.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows={4}
                value={state.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
        <div className="col-md-4">
          <div className='container row'>
            <h3 className=''></h3>
            <div className='col-6 mb-5'>
              <p><i className="bi bi-geo-alt-fill"></i></p>
              <p><i className="bi bi-telephone-fill"></i></p>
              <p><i className="bi bi-envelope-fill"></i></p>
            </div>            
          </div>
        </div>
      </div>
    </div>
  );
};
