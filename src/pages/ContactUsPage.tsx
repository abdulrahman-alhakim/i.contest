import { ContactUsForm } from "../components/ContactUsForm";

const ContactUsPage: React.FC = () => {

  
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: 'calc(100vh - 100px)' }}>
      <div className="mt-5" style={{ maxWidth: '1600px', width: '100%' }}>
        <ContactUsForm />
      </div>
    </div>
  )
};

export default ContactUsPage;

