import React, { useState, ChangeEvent, FormEvent } from 'react';
import emailjs from 'emailjs-com';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../images/carcharging.jpeg';
import { useTranslation } from 'react-i18next';

interface IState {
  name: string;
  email: string;
  inquiryType: string;
  message: string;
}

export const ContactUsForm: React.FC = () => {
  const { t } = useTranslation('pages-ContactUsForm'); // Use the ContactUsForm namespace
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
            setResponseMessage(t('emailSuccess'));
            setState({ name: '', email: '', inquiryType: 'Private', message: '' }); // Clear the form
          }, (error) => {
            console.log(error.text);
            setResponseMessage(t('acknowledgmentFailure'));
          }).finally(() => {
            setLoading(false); // Set loading to false after the process completes
          });

      }, (error) => {
        console.log(error.text);
        setResponseMessage(t('emailFailure'));
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
          <h2>{t('getInTouch')}</h2>
          <p>{t('description')}</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">{t('nameLabel')}</label>
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
              <label htmlFor="email" className="form-label">{t('emailLabel')}</label>
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
              <label htmlFor="inquiryType" className="form-label">{t('inquiryTypeLabel')}</label>
              <select
                className="form-control"
                id="inquiryType"
                name="inquiryType"
                value={state.inquiryType}
                onChange={handleChange}
                required
              >
                <option value="Private">{t('privateOption')}</option>
                <option value="Commercial">{t('commercialOption')}</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">{t('messageLabel')}</label>
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
            {loading ? (
              <button type="submit" className="btn text-light mb-3 disabled" style={{ backgroundColor: 'rgba(32,98,98,.9)' }}>
                <span className="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
                {t('sendMessageButton')}
              </button>
            ) : (
              <button type="submit" className="btn text-light mb-3" style={{ backgroundColor: 'rgba(32,98,98,.9)' }}>
                {t('sendMessageButton')}
              </button>
            )}
          </form>
          {loading && <div className="spinner-border text-secondary" role="status"><span className="visually-hidden">{t('loadingMessage')}</span></div>}
          {responseMessage && <p>{responseMessage}</p>}
        </div>
      </div>
    </div>
  );
};
