import React from 'react'
import "./AboutUsAcc.css";

const AboutUsAcc = () => {
    return (
        <div className="accordion custom-accordion" id="accordionFlushExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <div>
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseOne"
                            aria-expanded="false"
                            aria-controls="flush-collapseOne"
                            bs-accordion-color="secondary"
                        >
                            1.	Overview
                        </button>
                    </div>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                        <p><span className='fw-bold'>I.CONTEST</span>  is an emerging innovator in sustainable energy solutions. As a startup, we specialize in the design, implementation, and maintenance of advanced energy systems, including microgrids, electric vehicle charging stations, photovoltaic (PV) systems, and energy supply solutions for telecommunications infrastructure.
                        </p>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        2.	Mission
                    </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                        Our mission is to revolutionize the energy landscape by providing reliable, efficient, and sustainable energy solutions that meet the evolving needs of our customers and contribute to a greener planet.
                        we aim to provide markets with quality products and services and support local content development and knowledge transfer.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        3.	Vision
                    </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                        We envision a world where clean energy is accessible to all, driving economic growth, environmental stewardship, and technological advancement.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse4" aria-expanded="false" aria-controls="flush-collapse4">
                        4.	Core Services
                    </button>
                </h2>
                <div id="flush-collapse4" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <ul>
                                    <span className='fw-bold'>Microgrids:</span>
                                    <li>Design and installation of microgrid systems for residential, commercial, and industrial applications.</li>
                                    <li>Integration of renewable energy sources and energy storage systems for optimized performance and reliability.</li>
                                    <li>Advanced control systems for seamless energy management and distribution.</li>
                                    <li>Adaptation to high temperatures and desert conditions for maximum efficiency.</li>
                                </ul>
                            </li>
                            <li className="list-group-item">
                                <ul>
                                    <span className='fw-bold'>Charging Stations:</span>
                                    <li>Comprehensive solutions for electric vehicle charging infrastructure, including AC and DC fast chargers.</li>
                                    <li>Customizable installations to suit various locations such as residential complexes, commercial buildings, and public spaces.</li>
                                    <li>Smart charging technology to enhance energy efficiency and user convenience.</li>
                                    <li>Robust technology designed for operation in hot climates.</li>
                                </ul>
                            </li>
                            <li className="list-group-item">
                                <ul>
                                    <span className='fw-bold'>Photovoltaic (PV) Systems:</span>
                                    <li>Turnkey solutions for solar power generation, from residential rooftop installations to large-scale solar farms.</li>
                                    <li>High-efficiency PV modules and inverters to maximize energy output and cost savings.</li>
                                    <li>Monitoring and maintenance services to ensure optimal system performance and longevity.</li>
                                    <li>Systems specifically engineered for hot and dry environments.</li>
                                </ul>
                            </li>
                            <li className="list-group-item">
                                <ul>
                                    <span className='fw-bold'>Energy Supply for Cell Towers:</span>
                                    <li>Reliable and sustainable energy solutions for telecommunications infrastructure.</li>
                                    <li>Hybrid power systems combining solar, wind, and conventional energy sources to ensure uninterrupted service.</li>
                                    <li>Remote monitoring and control systems to enhance operational efficiency and reduce maintenance costs.</li>
                                    <li>Solutions designed to withstand extreme heat and dust conditions.</li>
                                </ul>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse5" aria-expanded="false" aria-controls="flush-collapse5">
                        5.	Values
                    </button>
                </h2>
                <div id="flush-collapse5" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                        <ul>
                            <li>
                                <span className='fw-bold'>Innovation:</span> Continuously driving advancements in energy technology to offer cutting-edge solutions.
                            </li>
                            <li>
                                <span className='fw-bold'>Integrity:</span> Upholding the highest standards of honesty and transparency in all our dealings.
                            </li>
                            <li>
                                <span className='fw-bold'>Intelligence:</span> Leveraging smart technologies and data-driven insights for optimal performance.
                            </li>
                            <li>
                                <span className='fw-bold'>Contest (Competition):</span> Fostering a spirit of competition to continuously improve and excel in the energy sector.
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse6" aria-expanded="false" aria-controls="flush-collapse6">
                        6.	Sustainability Commitment
                    </button>
                </h2>
                <div id="flush-collapse6" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                        <p>
                            Sustainability is at the core of I.CONTEST. We are dedicated to reducing carbon footprints, promoting renewable energy adoption, and supporting the global transition to a low-carbon economy.
                        </p>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse7" aria-expanded="false" aria-controls="flush-collapse7">
                        7.	Innovation and Technology
                    </button>
                </h2>
                <div id="flush-collapse7" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                        As a startup, our team of passionate experts leverages the latest technologies and industry best practices to deliver innovative energy solutions tailored to our clients' unique requirements.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse8" aria-expanded="false" aria-controls="flush-collapse8">
                        8.	Customer-Centric Approach
                    </button>
                </h2>
                <div id="flush-collapse8" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                        We pride ourselves on our customer-centric approach, working closely with our clients to understand their needs and deliver customized solutions that exceed their expectations.
                        Our comprehensive support services ensure long-term satisfaction and success.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUsAcc