import React from 'react'
import foto1 from '../images/zahrad.png'

const TurnKeyService = () => {
    return (
        <section id='turnkey'>
            <div>
                <div>
                    <h2>Turnkey Services</h2>
                </div>
                <div>
                    <div>
                        <div className="card" style={{ width: '18rem' }}>
                            <div className="card-body">
                                <img src={foto1} className="img" alt="zahn rad"></img>
                                <h5 className="card-title">Engineering</h5>
                                <h6 className="card-subtitle mb-2 text-body-secondary">(Engineering)</h6>
                            </div>
                        </div>
                    </div>
                    <div></div>
                </div>
                <div>
                    <p>- The comprehensive EPCM service accompanies a customer case from conception to implementation</p>
                    <p>- Ready and tailored for diverse customer needs</p>
                </div>
            </div>
        </section>
    )
}

export default TurnKeyService