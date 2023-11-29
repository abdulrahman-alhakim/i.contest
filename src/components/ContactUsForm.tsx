import { faFaceSmile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ContactUsForm = () => {
  return (
    <section className="container my-5">
        
      <div className="row">
        {/* Left side with photo and name */}
        <div className="col-md-6">
          <div className="row">
            <div className="col-4 text-center">
              {/* Replace `personPhoto.jpg` with the path to your photo 
            <img
              src="personPhoto.jpg"
              alt="Person's Name"
              className="rounded-circle mb-3"
              width="200"
              height="200"
            />
            */}

              <FontAwesomeIcon icon={faFaceSmile} spin size="2xl" />
              <h5>Faisal Hakim</h5>
            </div>
            <div className="col-4 text-center">
              {/* Replace `personPhoto.jpg` with the path to your photo 
            <img
              src="personPhoto.jpg"
              alt="Person's Name"
              className="rounded-circle mb-3"
              width="200"
              height="200"
            />
            */}

              <FontAwesomeIcon icon={faFaceSmile} spin size="2xl" />
              <h5>Abdulrahman Hanoun</h5>
            </div>
          </div>
          {/* Company email and address */}
          <div className="row mt-4">
            <div className="col-12 text-start">
              {/* Replace with your company's email and address */}
              <p className="mb-1">Email: contact@company.com</p>
              <b>Address:</b>
              <ul className="">
                <li>Hauptstraße 30a,</li>
                <li>38448 Wolfsburg,</li>
                <li>Germany</li>
              </ul>
            
            </div>
          </div>
        </div>

        {/* Right side with contact form */}
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                className="form-control"
                id="description"
                rows={3}
                placeholder="Your Message"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
