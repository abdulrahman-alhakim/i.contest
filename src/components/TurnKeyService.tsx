import React from 'react'
import foto1 from '../images/book-engineering-svgrepo-com.svg'
import foto2 from '../images/purchase-books-svgrepo-com.svg'
import foto3 from '../images/construction-machine-crane-lift-svgrepo-com.svg'
import foto4 from '../images/maintenance-warning-svgrepo-com.svg'


const TurnKeyService = () => {
    return (
        <section id='turnkey'>
            <div>
                <div className="d-flex justify-content-center align-items-center my-5">
                    <h2>Turnkey Services</h2>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <div className='d-flex flex-column flex-sm-row gap-5 gap-md-5'>
                        <div className="card justify-content-center align-items-center" style={{ width: '100%', maxWidth: '18rem' }}>
                            <div className='d-flex flex-column gap-4 p-3 border border-2 border-black rounded' style={{ backgroundColor: "rgba(32,98,98,.8)" }}>
                                <img src={foto1} width={150} height={150} className="img-fluid m-3" alt="engineer" />
                                <h4 className="text-center text-light">Engineering</h4>
                            </div>
                        </div>
                        <div className="card justify-content-center align-items-center border border-2 border-black rounded" style={{ width: '100%', maxWidth: '18rem', backgroundColor: "rgba(32,98,98,.8)"}}>
                            <div className='d-flex flex-column gap-4 p-3 '>
                                <img src={foto2} width={150} height={150} className="img-fluid m-3" alt="purchasing" />
                                <h5 className="text-center text-light">Procurement</h5>
                            </div>
                        </div>


                        <div className="card justify-content-center align-items-center border border-2 border-black rounded" style={{ width: '100%', maxWidth: '18rem', backgroundColor: "rgba(32,98,98,.8)"}}>
                        <div className='d-flex flex-column gap-4 p-3 '>
                                <img src={foto3} width={150} height={150} className="img-fluid m-3" alt="construction" />
                                <h5 className="text-center text-light">Construction</h5>
                            </div>
                        </div>
                        <div className="card justify-content-center align-items-center border border-2 border-black rounded" style={{ width: '100%', maxWidth: '18rem', backgroundColor: "rgba(32,98,98,.8)"}}>
                        <div className='d-flex flex-column gap-4 p-3 '>
                                <img src={foto4} width={150} height={150} className="img-fluid m-3" alt="maintain" />
                                <h5 className="text-center text-light">Maintenance</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center m-4">
                    <p>The comprehensive EPCM service accompanies a customer case from conception to implementation</p>
                    <p>Ready and tailored for diverse customer needs</p>
                </div>
            </div>
        </section>
    )
}

export default TurnKeyService