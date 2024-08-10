const people = [
    
    {
      name: 'Eng. Faisal Hakim',
      role: 'CEO',
      imageUrl: require('../images/faisall.png')
    },
  
  
  ]
  interface AboutUsPageProps {
    theme: string;
    setTheme: (theme: string) => void;
  }
  
  const AboutUsPage: React.FC<AboutUsPageProps> = ({ theme, setTheme }) => {
    return (
      <div className="d-flex justify-content-center align-items-center m-5">
        <div className="" style={{ maxWidth: '1000px', width: '100%' }}>
          {/* <div className="d-none d-md-flex justify-content-between p-4">
            <p className="ms-5">INNOVATIVE</p>
            <p>INSPIRING</p>
            <p className="me-5">INTELLIGENT</p>
          </div> */}
          <div className="mx-auto">
            <h2 className="h2 fw-bold mb-4" >Meet our leadership</h2>
  
            <p className="fs-5 mb-4 p-3">
              i.contest, located in Wolfsburg (Volkswagen City), is the product of innovative collaboration among professionals with diverse expertise. Our specialization lies in providing environmentally and economically sustainable solutions for power generation in remote areas, islands, and beyond. Through our electrical energy systems, we aim to reduce dependence on fossil fuels, maximize the use of renewable energy, and minimize overall energy costs.          </p>
          </div>
          <ul role="list" className="mt-5 row g-4">
            {people.map((person) => (
              <li key={person.name} className="col-12 col-sm-6 col-xl-4" style={{listStyleType: 'none'}}>
                <div className="d-flex align-items-center gap-2">
                  <img className="rounded-circle img-fluid" src={person.imageUrl} alt="" style={{ width: '74px', height: '74px', objectFit: 'cover' }} />
                  <div>
                    <h3 className="h5 mb-0 fw-semibold" style={{ color: theme === 'light' ? 'rgb(32,98,98)' : '#E0FFFF' }}>{person.name}</h3>
                    <p className="small fw-semibold">{person.role}</p>
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
  
  