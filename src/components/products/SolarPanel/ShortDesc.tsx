import React from 'react'
import bd from '../../../images/special-figures/beautifulDesign.png'
import di from '../../../images/special-figures/dimensions.png'
import hc from '../../../images/special-figures/halfCut.png'
import lw from '../../../images/special-figures/largeWafer.png'
import mono from '../../../images/special-figures/monocrystal.png'
import mb from '../../../images/special-figures/multibusbar.png'
import ptype from '../../../images/special-figures/ptype.png'
import perc from '../../../images/special-figures/PERC.png'
import rob from '../../../images/special-figures/roboust.png'

const ShortDesc = () => {
    return (
        <div className='container text-center'>
            <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-3">

                <div className="col" style={{ maxWidth: '200px' }}>
                    <div className="p-3">
                        <img src={bd} loading="lazy" className="img-fluid rounded-start" width={80} alt="MPX200" />

                        <p className="card-title">Beautiful Design</p>
                    </div>
                </div>
                <div className="col" style={{ maxWidth: '200px' }}>
                    <div className="p-3">
                        <img src={hc} loading="lazy" className="img-fluid rounded-start" width={80} alt="MPX200" />
                        <p className="card-title">Half Cut Cell</p>
                    </div>
                </div>
                <div className="col" style={{ maxWidth: '200px' }}>
                    <div className="p-3">
                        <img src={lw} loading="lazy" className="img-fluid rounded-start" width={80} alt="MPX200" />
                        <p className="card-title">Large wafer design</p>
                    </div>
                </div>
                <div className="col" style={{ maxWidth: '200px' }}>
                    <div className="p-3">
                        <img src={mono} loading="lazy" className="img-fluid rounded-start" width={80} alt="MPX200" />
                        <p className="card-title">Monocrystalline technology</p>
                    </div>
                </div>
                <div className="col" style={{ maxWidth: '200px' }}>
                    <div className="p-3">
                        <img src={mb} loading="lazy" className="img-fluid rounded-start" width={80} alt="MPX200" />
                        <p className="card-title">Multi-Busbar cell</p>
                    </div>
                </div>

                <div className="col" style={{ maxWidth: '200px' }}>
                    <div className="p-3">
                        <img src={ptype} loading="lazy" className="img-fluid rounded-start" width={80} alt="MPX200" />
                        <p className="card-title">P-Type semiconductor</p>
                    </div>
                </div>
                <div className="col" style={{ maxWidth: '200px' }}>
                    <div className="p-3">
                        <img src={perc} loading="lazy" className="img-fluid rounded-start" width={80} alt="MPX200" />
                        <p className="card-title">Passivated emitter and rear cell technology</p>
                    </div>
                </div>
                <div className="col" style={{ maxWidth: '200px' }}>
                    <div className="p-3">
                        <img src={rob} loading="lazy" className="img-fluid rounded-start" width={80} alt="MPX200" />
                        <p className="card-title">Robust product component</p>
                    </div>
                </div>


            </div>
        </div>

    )
}

export default ShortDesc;