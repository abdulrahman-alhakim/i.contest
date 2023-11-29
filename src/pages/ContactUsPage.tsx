import { ContactUsForm } from "../components/ContactUsForm";
import fImage from "../images/volodymyr-hryshchenko-V5vqWC9gyEU-unsplash.jpg"

const ContactUsPage: React.FC = () => {
    return (
    <div className="d-flex justify-content-center">
      <img className="img-fluid" width={900} src={fImage} alt="image"/>
      <ContactUsForm />
    </div>
    )
  };

  export default ContactUsPage;