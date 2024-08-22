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
  const [state, setState] = useState<IState>({ name: '', email: '', inquiryType: 'Commercial', message: '' });
  const [responseMessage, setResponseMessage] = useState('');
  const [loading, setLoading] = useState(false);


  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

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
          }).finally(() => {
            setLoading(false); // Set loading to false after the process completes
          });

      }, (error) => {
        console.log(error.text);
        setResponseMessage('Failed to send the message.');
        setLoading(false); // Set loading to false after the process completes
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
            {loading ? <button type="submit" className="btn text-light mb-3 disabled" style={{ backgroundColor: 'rgba(32,98,98,.9)' }}>
              <span className="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
              Send Message
            </button> :
              <button type="submit" className="btn text-light mb-3" style={{ backgroundColor: 'rgba(32,98,98,.9)' }}>
                Send Message
              </button>}
          </form>
          {loading && <div className="spinner-border text-secondary" role="status"><span className="visually-hidden">Loading...</span></div>}
          {responseMessage && <p>{responseMessage}</p>}
        </div>
      </div>
    </div>
  );
};



//    emailjs.sendForm('service_5oj9mzc', 'template_847hq1z', e.currentTarget, 'rRIDCCBSkeoeTHuQP') 'template_xiq97fo'
