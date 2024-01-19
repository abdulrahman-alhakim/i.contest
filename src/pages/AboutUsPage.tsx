const people = [
  {
    name: 'Dr. Wolfgang Hanoun',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1704807395127-898b64191a16?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Eng. Faisal Hakim',
    role: 'Co-Founder',
    imageUrl:
      'https://images.unsplash.com/photo-1704807395127-898b64191a16?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },


]
const AboutUsPage: React.FC = () => {
  return (
    <div className="bg-white py-5 py-sm-5">
      <div className="container px-4 px-lg-3">
        <div className="d-none d-md-flex justify-content-between p-4">
          <p className="ms-5">INNOVATIVE</p>
          <p>INSPIRING</p>
          <p className="me-5">INTELLIGENT</p>
        </div>
        <div className="mx-auto">
          <h2 className="h2 fw-bold mb-4">Meet our leadership</h2>

          <p className="fs-5 mb-4 p-3">
            i.contest, located in Wolfsburg (Volkswagen City), is the product of innovative collaboration among professionals with diverse expertise. Our specialization lies in providing environmentally and economically sustainable solutions for power generation in remote areas, islands, and beyond. Through our electrical energy systems, we aim to reduce dependence on fossil fuels, maximize the use of renewable energy, and minimize overall energy costs.          </p>
        </div>
        <ul role="list" className=" mt-5 row g-4">
          {people.map((person) => (
            <li key={person.name} className="col-12 col-sm-6 col-xl-4">
              <div className="d-flex align-items-center gap-2">
                <img className="rounded-circle" src={person.imageUrl} alt="" style={{ height: '64px', width: '64px' }} />
                <div>
                  <h3 className="h5 mb-0 fw-semibold">{person.name}</h3>
                  <p className="small fw-semibold text-primary">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>

  );
};

export default AboutUsPage;
