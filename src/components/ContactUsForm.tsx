import React, { useState, ChangeEvent, FormEvent } from 'react';
import emailjs from 'emailjs-com';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../images/carcharging.jpeg';

interface IState {
  name: string;
  email: string;
  inquiryType: string;
  message: string;
}

export const ContactUsForm: React.FC = () => {
  const [state, setState] = useState<IState>({ name: '', email: '', inquiryType: 'Private', message: '' });
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Send email to yourself
    emailjs.send('service_5oj9mzc', 'template_847hq1z', {
      name: state.name,
      email: state.email,
      inquiry_type: state.inquiryType,
      message: state.message,
    }, 'rRIDCCBSkeoeTHuQP')
      .then((result) => {
        console.log(result.text);

        // Send acknowledgment email to the client
        emailjs.send('service_5oj9mzc', 'template_xiq97fo', {
          name: state.name,
          email: state.email,
        }, 'rRIDCCBSkeoeTHuQP')
        .then((result) => {
          console.log(result.text);
          setResponseMessage('Email sent successfully!');
          setState({ name: '', email: '', inquiryType: 'Private', message: '' }); // Clear the form
        }, (error) => {
          console.log(error.text);
          setResponseMessage('Failed to send acknowledgment email.');
        });

      }, (error) => {
        console.log(error.text);
        setResponseMessage('Failed to send the message.');
      });
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
              <label htmlFor="inquiryType" className="form-label">Inquiry Type</label>
              <select
                className="form-control"
                id="inquiryType"
                name="inquiryType"
                value={state.inquiryType}
                onChange={handleChange}
                required
              >
                <option value="Private">Private</option>
                <option value="Commercial">Commercial</option>
              </select>
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
            <button type="submit" className="btn text-light mb-3" style={{ backgroundColor: 'rgba(32,98,98,.9)' }}>Send Message</button>
          </form>
          {responseMessage && <p>{responseMessage}</p>}
        </div>
      </div>
    </div>
  );
};



//    emailjs.sendForm('service_5oj9mzc', 'template_847hq1z', e.currentTarget, 'rRIDCCBSkeoeTHuQP') 'template_xiq97fo'
